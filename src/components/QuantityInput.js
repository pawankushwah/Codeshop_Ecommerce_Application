// components/QuantityInput.js
import React from 'react';
import styles from '../styles/QuantityInput.module.css';

const QuantityInput = ({ value, min, max, onChange }) => {
  return (
    <span className={styles.quantityInput}>
      <button
        className={styles.decrement}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        -
      </button>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        className={styles.numberInput}
      />
      <button
        className={styles.increment}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        +
      </button>
    </span>
  );
};

export default QuantityInput;