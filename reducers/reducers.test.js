import { app } from './index'
import { ADD_CATEGORY, ADD_EXERCISE } from '../constants'

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
        payload: {
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
        payload: {
          categoryName: 'abs',
          exercise: {name: 'crunch'}
        }
      })
    ).toEqual({
      categories: [{name: 'abs', exercises: [{name: 'push-up'},{name: 'crunch'}]}]
    })
  })
})
