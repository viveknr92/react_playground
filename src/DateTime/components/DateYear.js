import React, {Component} from 'react';
import API from '../services/dateAPI';
import DateYearClick from './DateYearClick';
import DateYearMessage from './DateYearMessage';
import '../style.scss'

export default class DateYear extends Component {

  constructor() {
    super();
    this.handleClickButton = this.handleClickButton.bind(this);
    this.state = {
      isLoading: false,
      response: {}
    }
  }

	async handleClickButton() {
    // handle button click event and state changes here
    console.log("button clicked")
    this.setState({isLoading: true})
    const response = await API()
    console.log(response)
    this.setState({response, isLoading: false})
	}

	render() {
        // complete the necessary application logic here
		return (
  <div className='container-fluid'>
    <div>
      <center>
        <h2>Date/Year Server</h2>
      </center>
    </div>
    <div className='text-center page-title'>
      <DateYearClick onButtonClick={this.handleClickButton} />
    </div>
    <div className='text-center page-title'>
      <DateYearMessage isLoading={this.state.isLoading} response={this.state.response} />
    </div>
  </div>
);

	}
}

