/* global it expect */

import { shallow } from 'enzyme'
import React from 'react'
import SearchBox from '../components/SearchBox'

it('Snapshot test for SearchBox. Will fall if component has changed.', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot()
}) 
