import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import DateYear from './DateYear';
import DateYearClick from './DateYearClick';
import DateYearMessage from './DateYearMessage';
import dateAPI from '../services/dateAPI';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('DateYearMessageComponent', () => {
  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateYearMessage />, div);
  });

  it('check if the date and year are rendered correctly', () => {
    const msgWrapper = mount(<DateYearMessage date={'01-01-1992'} year={1992}/>);
    const date = msgWrapper.find('.date h3').get(0);
    const year = msgWrapper.find('.year h3').get(0);
    expect(date.props.children).toEqual([ 'The current date is ', '01-01-1992' ]);
    expect(year.props.children).toEqual([ 'The current year is ', 1992 ]);
  });
});
