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
    {src: '/images/sos2.png',
    name: 'sos'},
    {src: '/images/wurli2.png'},
    {src: '/images/trilogy2.png'},
    {src: '/images/freudian.png'},
    {src: '/images/youth.png'},
    {src: '/images/mood.png'}
  ]

  return (
  <>
    <main className={styles.container}>
      <div  className={styles.scroll}>
        <CarouselComponent images={images} />
        <div>{postcards}</div>
      </div>
    </main>
    <NavBar/>
  </>
  );
}