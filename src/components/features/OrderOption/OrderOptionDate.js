import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <DatePicker 
    selected={currentValue}
    onChange={(date) => setOptionValue(date)}
  />
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};

export default OrderOptionDate;
