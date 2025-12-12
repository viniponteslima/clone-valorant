import Link from "next/link";
import type { ItemMenuProps } from "@/types/ItemMenu";
import styles from "./ItemMenu.module.css";

export default function ItemMenu({ text, path, highlight }: ItemMenuProps) {
	return (
		<Link href={path} className={styles.itemMenu}>
			<div className={styles.marker} />
			<h2 className={highlight ? styles.highlight : ""}>{text}</h2>
		</Link>
	);
}
