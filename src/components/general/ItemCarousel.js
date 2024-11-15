import Link from 'next/link';
import styles from './ItemCarousel.module.css';
import Icon from '@mdi/react'
import { mdiOpenInNew } from '@mdi/js'

export default function ItemCarousel({ caption, image, href='' }) {
  return (
    <Link href={href} target={href ? '_blank' : ''}>
      <div className={styles.carouselSlide} > 
        
        <div className={styles.carouselCaption}>
          {caption} 
          <Icon path={mdiOpenInNew} style={{marginLeft:'.1rem'}} size={0.8} />
        </div>

        <div className={styles.bgImage} style={{background: `${image.bgColor}`}} >
          <Icon path={image.icon} color={image.fillColor}  />

        </div>
      </div>
    </Link>
  );
}