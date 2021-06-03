import React from 'react';
import styles from './tourPackages.module.scss';
import Header from '../../../components/Header';
import SubHeader from '../../../components/SubHeader';
import WideCard from '../../../components/WideCard';
const TourPackages = () => {
  return (
    <div className={styles.tour_packages}>
      <Header title="Recommanded Tour Packages" />
      <SubHeader title="These recommendations are based on your profile information" />
      <WideCard />
      <WideCard />
      <WideCard />
    </div>
  );
};

export default TourPackages;
