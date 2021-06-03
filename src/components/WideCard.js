import React from 'react';
import styles from './wideCard.module.scss';
import plane from '../assets/plane.svg';

const WideCard = () => {
  return (
    <div className={styles.wide_card}>
      <div className={styles.icon_parent}>
        <img className={styles.icon} src={plane} alt="plane" />
      </div>
      <div className={styles.header_desc}>
        <h4 className={styles.header}>Pilates</h4>
        <p className={styles.description}>
          Developed first by Joseph Pilates, after whom the technique is name…
        </p>
      </div>
      <div className={styles.price_value}>
        <p className={styles.price}>Estimated Price</p>
        <h3 className={styles.value}>$ 4,220/6 mo.</h3>
      </div>
      <button className={styles.order_button}>Order Now</button>
    </div>
  );
};

export default WideCard;
