import React from 'react';
import styles from './card.module.scss';
// import form from '../../../assets/form.png';

const card = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card_image}
        src={`assets/${image}.png`}
        alt="form"
      />
      <div className={styles.card_header_desc}>
        <h5 className={styles.card_header}>
          {title}{' '}
          <span>
            --
            {'>'}
          </span>
        </h5>
        <p className={styles.card_description}>{description}</p>
      </div>
    </div>
  );
};

export default card;
