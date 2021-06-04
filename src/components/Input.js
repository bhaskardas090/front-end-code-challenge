import React from 'react';
import styles from './input.module.scss';

const Input = ({ placeholder }) => {
  return (
    <div className={styles.input_component}>
      <input type="text" className={styles.input} placeholder={placeholder} />
      {/* <span className={styles.floating_label}>Name</span> */}
    </div>
  );
};

export default Input;
