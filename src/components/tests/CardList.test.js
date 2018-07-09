import { shallow } from 'enzyme'
import React from 'react'
import CardList from '../CardList'

it('Snapshot test for CardList. Will fall if component has changed. Using "mockRobot" list...', () => {
    const mockRobots = [
        {
            'id': 1,
            'name': 'Test',
            'username': 'TestUserame',
            'email': 'test@test.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
}) 