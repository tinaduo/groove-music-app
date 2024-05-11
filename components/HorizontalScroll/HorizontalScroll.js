import React from 'react';
import styles from './HorizontalScroll.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({ images, name }) => {
  const settings = {
    
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.test} style={{ maxWidth: '350px', margin: 'auto', }}>
        <h4>Popular This Week</h4>
      <Slider {...settings}>
        {images.map((image) => (
          <div className={styles.test2}>
            <img src={image.src} style={{ width: '112px', height: '112px', }}/>
            <div className={styles.subtitle}>{image.subtitle}</div>
            <div className={styles.artist}>{image.artist}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;