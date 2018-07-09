import { shallow } from 'enzyme'
import React from 'react'
import Scroll from '../Scroll'

it('Snapshot test for Scroll. Will fall if component has changed.', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot()
}) 