import * as actions from './index'
import {ADD_CATEGORY, ADD_EXERCISE} from '../constants'

describe('actions', () => {
  it('should handle addCategory action', () => {
    const name = 'abs'
    const expectedAction = {
      type: ADD_CATEGORY,
      category: {
        name: name      }
    }
    expect(actions.addCategory({name: name})).toMatchObject(expectedAction)
  })
})
