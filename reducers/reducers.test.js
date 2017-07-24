import { app } from './index'
import { ADD_CATEGORY } from '../constants'

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
        payload: {name: 'abs'}
      })
    ).toEqual({
      categories: [{name: 'abs'}]
    })
  })
})
