import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOptionNumber = ({currentValue, setOptionValue, price, limits}) => (
  <div className={styles.number}>
    <input 
      className={styles.inputSmall} 
      type="number"
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(parseInt(event.currentTarget.value))}
    ></input>
    {price}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
  limits: PropTypes.object,
};

export default OrderOptionNumber;
