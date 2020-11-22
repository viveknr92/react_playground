import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../style.scss'

class DateYearMessage extends Component {
	render() {
        // use props from parent to diplay the current date and current year.

		return (
      !this.props.isLoading && this.props.response.time ? ( 
        <div className='info center-block'>
          <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 date'>
            <strong>
          <h3>The current date is {this.props.response.time}</h3>
            </strong>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6 col-lg-6 year'>
            <strong>
              <h3>The current year is {this.props.response.date}</h3>
            </strong>
          </div>
        </div>
      ) : 
      (
        <div className='info center-block'>
          <h3>{this.props.isLoading ? 'Loading': ''}</h3>
        </div>
      )


);

	}
}

export default DateYearMessage

// Uncomment the below snippet
// DateYearMessage.propTypes = {
// 	date: PropTypes.string,
// 	year: PropTypes.number
// }

