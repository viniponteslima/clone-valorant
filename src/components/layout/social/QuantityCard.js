import styles from './QuantityCard.module.css';

export default function QuantityCard({ len, title }) {
  return (
    <div className={styles.quantityCard}>
      <small className='qnt'>{len}</small>
      <span className='title'>{title}</span>
    </div>
  );
}