import NotificationsList from '@/components/NotificationsList';
import React from 'react';
import styles from '../styles/Activity.module.css'
import NavBar from '@/components/NavigationBar';

const activityData = {
  New: [
    {
      user: { name: 'dancing.queen73', userPic: '/images/dancingQueen.png' },
      description: 'Liked your review: “Mama Mia - ABBA”',
      time: '2m ago',
    },
    {
      user: { name: 'heythere-delilah81', userPic: '/images/deliah81.png' },
      description: 'Liked your comment: Whats it like in NYC...',
      time: '10m ago',
    }
  ],
  Today: [
    {
      user: { name: 'darinka.aguirre567', userPic: '/images/darinka.png' },
      description: 'Liked your review: “Mama Mia - ABBA”',
      time: '8hrs ago',
    }
  ],
  'This Week': [
    {
      user: { name: 'tiny.dancer48', userPic: '/images/dancer.png' },
      description: 'Liked your review: “Elton John - Madman...”',
      time: 'Sunday',
    }
  ]
};

export default function Activity() {

  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1>GROOVE</h1>
            <h2>Activity</h2>
          </div>
          <NotificationsList activity={activityData} />
          <div className={styles.nav}><NavBar/></div>
        </div>
    </main>
    </>
  );
}