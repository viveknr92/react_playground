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
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

configure({ adapter: new Adapter() });

describe('DateYearClickComponent', () => {
  it('complete app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DateYearClick />, div);
  });

  it('check click event', (done) => {
    const mockAdapter = new MockAdapter(axios);
    const mainWrapper = mount(<DateYear />);
    const clickWrapper =  mainWrapper.find(DateYearClick).get(0);
    mockAdapter.onGet('https://jsonmock.hackerrank.com/datetime').reply(200, {
      "time": "06:08:35 PM",
      "date": "11-24-2016"

    });
    clickWrapper.props.onClickButton();
    const msgWrapper =  mount(<DateYearMessage date={"11-24-2016"} year={2016}/>);;
    dateAPI.getAPIResponse().then(res => {
      expect(res).toBe('11-24-2016');

    }, res => {}).then(done, done);
  });

});
