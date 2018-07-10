/* global it expect */

import { shallow } from 'enzyme'
import React from 'react'
import Card from '../components/Card'

it('Snapshot test for Card. Will fall if component has changed.', () => {
    expect(shallow(<Card />)).toMatchSnapshot()
}) 