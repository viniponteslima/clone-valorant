import Icon from "@mdi/react";
import Link from "next/link";
import type { ItemCarouselProps } from "@/types/ItemCarousel";
import styles from "./ItemCarousel.module.css";

export default function ItemCarousel({
	caption,
	image,
	href = "",
}: ItemCarouselProps) {
	return (
		<Link href={href} target={href ? "_blank" : ""}>
			<div className={styles.carouselSlide}>
				<div className={styles.carouselCaption}>
					{caption}
					<Icon
						path={
							"M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
						}
						style={{ marginLeft: ".1rem" }}
						size={0.8}
					/>
				</div>

				<div
					className={styles.bgImage}
					style={{ background: `${image.bgColor}` }}
				>
					<Icon path={image.icon} color={image.fillColor} />
				</div>
			</div>
		</Link>
	);
}
