/* global it describe expect */

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from '../constants.js'
import * as actions from '../actions'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    const text = 'test'
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
})

describe('requestRobots', () => { 
  // Create a fake store which has the thunkMiddleware to test
  const mockStore = configureMockStore([thunkMiddleware])

  it('handles requesting robots API', () => {
    // expect.assertions(2);
    const expectedAction = [{
      type: REQUEST_ROBOTS_PENDING
    }]
    const store = mockStore()
    store.dispatch(actions.requestRobots())
    let action = store.getActions()
    expect(action).toEqual(expectedAction)
    // if(action.length > 2) {
    //     expect(action[1].payload.length).toBeGreaterThan(0)
    // }
  })

  // TODO: Test success/fail
})
