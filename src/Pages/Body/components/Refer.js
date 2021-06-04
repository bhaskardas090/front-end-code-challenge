import React, { useState } from 'react';
import styles from './refer.module.scss';
import Header from '../../../components/Header';
import SubHeader from '../../../components/SubHeader';
import Input from '../../../components/Input';
import referImg from '../../../assets/referImg.png';

const Refer = () => {
  const [placeholders] = useState([
    'Name',
    'Email',
    'Phone Number',
    'Gender',
    'Address',
    'Apt/Suite/Other',
  ]);
  return (
    <div className={styles.refer}>
      <Header title="Refer and Earn" />
      <SubHeader title="Add your refferel and earn 5$ after they sign up." />
      <p className={styles.refer_heading}>Basic Information</p>
      <div className={styles.refer_form_image_section}>
        <form className={styles.refer_form}>
          {placeholders.map((placeholder) => {
            return <Input placeholder={placeholder} key={placeholder} />;
          })}
          <hr className={styles.refer_devider} />
        </form>
        <img src={referImg} alt="Refer Other" className={styles.refer_image} />
      </div>
      <div className={styles.refer_footer}>
        <p className={styles.refer_footer_text}>
          Lorem Ipsum dolor sit amet & Lorem Ipsum
        </p>
        <button className={styles.refer_footer_button}>REFER</button>
      </div>
    </div>
  );
};

export default Refer;
