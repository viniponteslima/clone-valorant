import { mdiGithub, mdiInstagram, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";
import Link from "next/link";
import Carousel from "../general/Carousel";
import ItemCarousel from "../general/ItemCarousel";
import styles from "./Banner.module.css";

export default function Banner() {
	const carousel = [
		{
			text: "Veja meus projetos no GitHub!",
			href: "https://github.com/viniponteslima/",
			image: {
				icon: mdiGithub,
				bgColor: "#000000bf",
			},
		},
		{
			text: "Conecte-se comigo no LinkedIn!",
			href: "https://www.linkedin.com/in/viniciusponteslima/",
			image: {
				icon: mdiLinkedin,
				bgColor: "#0A66C2bf",
			},
		},
		{
			text: "Siga-me no Instagram!",
			href: "https://www.instagram.com/viniciuslima.dev/",
			image: {
				icon: mdiInstagram,
				bgColor:
					"radial-gradient(circle at 30% 107%, #fdf497BF 0%, #fdf497BF 5%, #fd5949BF 45%,#d6249fBF 60%,#285AEBBF 90%)",
			},
		},
	];
	return (
		<aside className={styles.bannersContainer}>
			<Link
				href={"https://github.com/viniponteslima/clone-valorant"}
				target="_blank"
				className={styles.thisProject}
			>
				<Icon path={mdiGithub} size={6} />
				<h3>Acompanhe este projeto no GitHub!</h3>
			</Link>

			<div className={styles.social}>
				<Carousel dots={true}>
					{carousel?.map((item) => (
							<ItemCarousel
								key={item.href}
								href={item.href}
								caption={item.text}
								image={item.image}
							/>
						))}
				</Carousel>
			</div>
		</aside>
	);
}
