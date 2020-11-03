import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionText = ({setOptionValue}) => (
  <div>
    <input
      type="text"
      onChange={event => setOptionValue(event.currentTarget.value)}
    ></input>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  id: PropTypes.number,
};

export default OrderOptionText;
