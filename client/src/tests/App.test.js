import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import ReactShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';

test('should render App correctly', () => {
  const wrapper = shallow(<App />);
  expect(toJSON(wrapper)).toMatchSnashot();
});
