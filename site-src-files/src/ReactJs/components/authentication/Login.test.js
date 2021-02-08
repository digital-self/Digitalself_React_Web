import React from 'react';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './Login';

var enzyme = require('enzyme');
enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
    const login = shallow(<Login />);
});
