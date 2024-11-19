"use client"
import React, { useState } from 'react';
import styles from './Carousel.module.css';

export default function Carousel({ children, dots=false }) {

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {
          React.Children.map(children, (child) => (
            <div className={styles.carouselSlide}>
              {child}
            </div>
          ))
        }
      </div>

      {
        dots && (
          <div className={styles.carouselDots}>
          {
            React.Children.map(children, (child, index) => (
              <div 
                className={`${styles.carouselDotWrapper} ${index === currentIndex ? styles.active : ''}`} 
                onClick={() => goToSlide(index)}
              >
                <div className={styles.carouselDot}></div>
              </div>
            ))
          }
        </div>
        )
      }      
    </div>
  );
}