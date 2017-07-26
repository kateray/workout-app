import { app } from './index'
import { ADD_CATEGORY, ADD_EXERCISE, UPDATE_EXERCISE, DELETE_EXERCISE } from '../constants'

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(app(undefined, {})).toEqual(
      {categories: []}
    )
  })

  it('should handle ADD_CATEGORY', () => {
    expect(
      app({}, {
        type: ADD_CATEGORY,
        category: {
          name: 'abs'
        }
      })
    ).toEqual({
      categories: [{name: 'abs', exercises: []}]
    })
  })

  it('should handle ADD_EXERCISE', () => {
    expect(
      app({categories: [{name: 'abs', id: '1', exercises: [{name: 'push-up'}]}]}, {
        type: ADD_EXERCISE,
        categoryId: '1',
        exercise: {name: 'crunch'}
      })
    ).toEqual({
      categories: [{name: 'abs', id: '1', exercises: [{name: 'push-up'}, {name: 'crunch', amount: '1', amountType: 'reps'}]}]
    })
  })

  it('should handle UPDATE_EXERCISE', () => {
    expect(
      app({categories: [{name: 'abs', id: '1', exercises: [{name: 'push-up', id: '1'}]}]}, {
        type: UPDATE_EXERCISE,
        categoryId: '1',
        exercise: {id: '1', name: 'push-ups'}
      })
    ).toEqual({
      categories: [{name: 'abs', id: '1', exercises: [{name: 'push-ups', id: '1'}]}]
    })
  })

  it('should handle DELETE_EXERCISE', () => {
    expect(
      app({categories: [{name: 'abs', id: '1', exercises: [{name: 'push-up', id: '1'}, {name: 'crunch', id: '2'}]}]}, {
        type: DELETE_EXERCISE,
        categoryId: '1',
        exerciseId: '2'
      })
    ).toEqual({
      categories: [{name: 'abs', id: '1', exercises: [{name: 'push-up', id: '1'}]}]
    })
  })
})
