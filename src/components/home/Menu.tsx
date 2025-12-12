import { menuItems } from "@/data/menuItens";
import ItemMenu from "./ItemMenu";
import styles from "./Menu.module.css";

export default function Menu() {
	return (
		<div className={styles.menu}>
			{menuItems.map((item) => (
				<ItemMenu key={item.text} {...item} />
			))}
		</div>
	);
}
