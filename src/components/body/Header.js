import React from 'react';
import styles from './header.module.scss';
import Card from './components/Card';
import { useState } from 'react';

const Header = () => {
  const [cards] = useState([
    {
      image: 'form',
      title: 'Fill up the form',
      description: 'Fill in your basic information to join the Gym Club',
    },
    {
      image: 'gym',
      title: 'Find your perfect gym',
      description:
        'Easily find your perfect gym club and join the club instantly.',
    },
    {
      image: 'progress',
      title: 'Track your progress',
      description: 'Analyze and plan for your tasks and progress.',
    },
  ]);

  return (
    <div className={styles.header}>
      <div className={styles.header_name_button}>
        <h2 className={styles.header_name}>
          Hello <span>Jimmy,</span>
        </h2>
        <button className={styles.header_button}>Find a gym club</button>
      </div>
      <h1 className={styles.sub_header}>What do you want to do today?</h1>
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card
            image={card.image}
            title={card.title}
            description={card.description}
            className={styles.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
