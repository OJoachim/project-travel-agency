import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

{/*
const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};
*/}

class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };
  
  handleChange = (date) => {
    this.setState(
      {startDate: date}
    );
  };
  
  render() {
    return (
      <DatePicker selected={this.state.startDate} onChange={this.handleChange}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;
