import React from 'react';
import styles from './header.module.scss';

const Header = ({ title }) => {
  return <h1 className={styles.header}>{title}</h1>;
};

export default Header;
