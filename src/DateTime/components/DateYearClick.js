import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style.scss'

export default class DateYearClick extends Component {

  constructor() {
    super();
  }
    // handle triggering of button click in the sections below
	onButtonClick(e) {
    this.props.onButtonClick(e)
	}

	render() {
		return (
  <div className='col-xs-12  col-sm-12 col-md-12 col-lg-12'>
    <button className='fullwidth button btn-primary center-block' onClick={(e) => this.onButtonClick(e)}>
      Display Date and Year
    </button>
  </div>
);
	}
}

// Uncomment the snippet below
// DateYearClick.propTypes = {
// 	onClickButton: PropTypes.func
// }

