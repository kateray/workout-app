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
      app({categories: [{name: 'abs', exercises: [{name: 'push-up'}]}]}, {
        type: ADD_EXERCISE,
        categoryName: 'abs',
        exercise: {name: 'crunch'}
      })
    ).toEqual({
      categories: [{name: 'abs', exercises: [{name: 'push-up'},{name: 'crunch'}]}]
    })
  })

  it('should handle DELETE_EXERCISE', () => {
    expect(
      app({categories: [{name: 'abs', exercises: [{name: 'push-up', id: '1'}, {name: 'crunch', id: '2'}]}]}, {
        type: DELETE_EXERCISE,
        categoryName: 'abs',
        exerciseId: '2'
      })
    ).toEqual({
      categories: [{name: 'abs', exercises: [{name: 'push-up', id: '1'}]}]
    })
  })
})
