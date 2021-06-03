import React from 'react';
import styles from './navbar.module.scss';
import profile from '../assets/profile_big.png';
import call from '../assets/call.svg';
import mail from '../assets/mail.svg';
import message from '../assets/message.svg';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_profile_part}>
        <img src={profile} alt="avatar" className={styles.navbar_avatar} />
        <h3 className={styles.navbar_avatar_name}>Jimmy Hendrix</h3>
        <p className={styles.navbar_avatar_view_profile}>View Profile</p>
      </div>
      <div className={styles.navbar_navigation_part}>
        <ul className={styles.navbar_links}>
          <li className={styles.navbar_link}>Dashboard</li>
          <li className={styles.navbar_link}>Tasks</li>
          <li className={styles.navbar_link}>Gym Clubs</li>
          <li className={styles.navbar_link}>Your Connections</li>
          <li className={styles.navbar_link}>Settings</li>
        </ul>
      </div>
      <div className={styles.navbar_footer_part}>
        <h3 className={styles.navbar_footer_mentor}>
          My Mentor &emsp;&emsp;&emsp; --{'>'}
        </h3>
        <h2 className={styles.navbar_footer_jummy}>Jummy Page</h2>
        <div className={styles.navbar_footer_icons}>
          <img className={styles.navbar_footer_icon} src={call} alt="call" />
          <img className={styles.navbar_footer_icon} src={mail} alt="mail" />
          <img
            className={styles.navbar_footer_icon}
            src={message}
            alt="message"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
