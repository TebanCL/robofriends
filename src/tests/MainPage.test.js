/* global beforeEach jest expect it */

import { shallow } from 'enzyme'
import React from 'react'
import MainPage from '../components/MainPage'

let wrapper
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage { ...mockProps }/>)
})

it('Renders MainPage', () => {
  expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', () => {
  expect(wrapper.instance().filterRobots()).toEqual([])

  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      'id': 3,
      'name': 'test',
      'email': 'test@test.com'
    }],
    searchField: '',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual(
    [{
      'id': 3,
      'name': 'test',
      'email': 'test@test.com'
    }])
})

it('filters robots correctly', () => {
  expect(wrapper.instance().filterRobots()).toEqual([])

  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      'id': 3,
      'name': 'test',
      'email': 'test@test.com'
    }],
    searchField: 'i',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([])
})

it('filters robots correctly', () => {
  expect(wrapper.instance().filterRobots()).toEqual([])

  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      'id': 3,
      'name': 'test',
      'email': 'test@test.com'
    }],
    searchField: 'i',
    isPending: true
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance()).toMatchSnapshot()
})
