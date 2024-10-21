import Link from 'next/link';
import styles from './ItemMenu.module.css';

export default function ItemMenu({ text, path, highlight }) {
  return (
    <Link href={path} className={styles.itemMenu}>
      <div className={styles.a} />
      <h2 className={highlight ? styles.highlight : ''}>
        {text}
      </h2>
    </Link>
  );
}