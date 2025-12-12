import styles from "./QuantityCard.module.css";

interface QuantityCardProps {
	len: number;
	title: string;
}

export default function QuantityCard({ len, title }: QuantityCardProps) {
	return (
		<div className={styles.quantityCard}>
			<small className="qnt">{len}</small>
			<span className="title">{title}</span>
		</div>
	);
}
