import React from 'react';
import styles from './subHeader.module.scss';

const SubHeader = ({ title }) => {
  return <p className={styles.sub_header}>{title}</p>;
};

export default SubHeader;
