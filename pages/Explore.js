import React from 'react';
import styles from '../styles/Explore.module.css'
import NavBar from '@/components/NavigationBar';
import Postcard from '../components/Postcard';
import reviewData from '../data/ReviewData';
import CarouselComponent from '@/components/HorizontalScroll/HorizontalScroll';

export default function Explore() {
  const postcards = reviewData.map((review, index) => (
    <Postcard key={review.id || index} {...review} />
  ));

  const images = [
    {src: '/images/sos2.png', subtitle: 'SOS', artist: 'SZA'},
    {src: '/images/wurli2.png', subtitle:'Wurli', artist: 'Dominic Fike'},
    {src: '/images/trilogy2.png', subtitle: 'Trilogy', artist: 'The Weeknd'},
    {src: '/images/freudian.png', subtitle: 'Freudian', artist: 'Daniel Caesar'},
    {src: '/images/youth.png', subtitle: "Youth of Today", artist: 'Musical Youth'},
    {src: '/images/mood.png', subtitle: "130 Mood: TRBL", artist: 'DEAN'}
  ]

  return (
  <>
    <main className={styles.container}>
      <div  className={styles.scroll}>
      <div className={styles.groove}><h1>GROOVE</h1></div>
        <CarouselComponent images={images} />
        <div className={styles.cards}>{postcards}</div>
      </div>
    </main>
    <NavBar/>
  </>
  );
}