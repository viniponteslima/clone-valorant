import styles from './BackgroundVideo.module.css';

export default function BackgroundVideo({ src }) {
  return (
    <video className={styles.video} autoPlay muted loop id='backgroundVideo' src={src} />
  );
}