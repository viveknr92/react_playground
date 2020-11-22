import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import DateYear from './DateYear';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('DateYearComponent', () => {
  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateYear />, div);
  });

  
});
