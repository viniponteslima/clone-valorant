import ItemMenu from "./ItemMenu";
import styles from "./Menu.module.css";

export default function Menu() {
	const itensMenu = [
		{
			title: "Jogar",
			path: "/",
			highlight: true,
		},
		{
			title: "Premier",
			path: "/",
		},
		{
			title: "Carreira",
			path: "/",
		},
		{
			title: "Passe de Batalha",
			path: "/",
		},
		{
			title: "Coleção",
			path: "/",
		},
		{
			title: "Agentes",
			path: "/",
		},
		{
			title: "ESports",
			path: "/",
		},
		{
			title: "Loja",
			path: "/",
		},
	];

	return (
		<div className={styles.menu}>
			{itensMenu.map((item, index) => (
				<ItemMenu
					key={index}
					text={item.title}
					path={item.path}
					highlight={item.highlight ? item.highlight : ""}
				/>
			))}
		</div>
	);
}
