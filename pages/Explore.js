import React from 'react';
import styles from '../styles/Explore.module.css'
import NavBar from '@/components/NavigationBar';
import Postcard from '../components/Postcard';
import reviewData from '../data/ReviewData';
import CarouselComponent from '@/components/HorizontalScroll/HorizontalScroll';
import FilterButton from '@/components/FilterButton';
import { useState } from 'react';
import Head from 'next/head';

export default function Explore() {
  const postcards = [
    <Postcard key={reviewData[0].id} {...reviewData[0]} />,
    <Postcard key={reviewData[1].id} {...reviewData[1]} />,
    <Postcard key={reviewData[2].id} {...reviewData[2]} />,
    <Postcard key={reviewData[3].id} {...reviewData[3]} />,

  ];

  const images = [
    {src: '/images/sos2.png', subtitle: 'SOS', artist: 'SZA'},
    {src: '/images/wurli2.png', subtitle:'Wurli', artist: 'Dominic Fike'},
    {src: '/images/trilogy2.png', subtitle: 'Trilogy', artist: 'The Weeknd'},
    {src: '/images/freudian.png', subtitle: 'Freudian', artist: 'Daniel Caesar'},
    {src: '/images/youth.png', subtitle: "Youth of Today", artist: 'Musical Youth'},
    {src: '/images/mood.png', subtitle: "130 Mood: TRBL", artist: 'DEAN'}
  ];

  const [activeFilters, setActiveFilters] = useState('');

  const filters = [
    { 
      label: 'POP',
      color: '#C8BAF8'
    },
    {
      label: 'ROCK',
      color: '#F6C65C'
    },
    {
      label: 'HIP-HOP',
      color: '#DC7755'
    },
    {
      label: 'COUNTRY',
      color: '#C8BAF8'
    },
    {
      label: 'JAZZ',
      color: '#F6C65C'
    },
    {
      label: 'FUNK',
      color: '#C8BAF8'
    },
    {
      label: 'R&B',
      color: '#DC7755'
    },
    {
      label: 'RAP',
      color: '#F6C65C'
    },
    {
      label: 'TECHNO',
      color: '#DC7755'
    },
    {
      label: 'SOUL',
      color: '#C8BAF8'
    },
    {
      label: 'EDM',
      color: '#F6C65C'
    },

  ];

  const handleFilterClick = (filter) => {
    setActiveFilters((prev) => {
        const index = prev.indexOf(filter); 

        if (index !== -1) {
            const newFilters = [...prev]; 
            newFilters.splice(index, 1);
            return newFilters;
        } else {
            return [...prev, filter];
        }
    });
};

const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
    setSnackbarMessage('');
  };

return (
    <>
      <Head>
        <title>GROOVE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content=" black-translucent"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.scroll}>
          <div className={styles.groove}><h1>GROOVE</h1></div>
          <CarouselComponent images={images} />
          {showSnackbar && (
            <Snackbar message={snackbarMessage} onClose={handleCloseSnackbar} />
          )}
          <div className={styles.feed}>
            <h3>Your Feed</h3>
            <div className={styles.buttons}>
              {filters.map(({ label, color }) => (
                <FilterButton
                  key={label}
                  label={label}
                  onClick={() => handleFilterClick(label)}
                  active={activeFilters.includes(label)}
                  color={color}
                  tabIndex="0"
                />
              ))}
            </div>
          </div>
          <div className={styles.cards}>{postcards}</div>
          <div className={styles.nav}><NavBar/></div>
        </div>
      </main>
    </>
  );
}