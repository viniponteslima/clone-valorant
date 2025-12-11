"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel({ children, dots = false }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const totalSlides = React.Children.count(children);
	const intervalRef = React.useRef(null);

	const startAutoPlay = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}

		intervalRef.current = setInterval(() => {
			setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
		}, 5000);
	}, [totalSlides]);

	const goToSlide = (index) => {
		setCurrentIndex(index);
		startAutoPlay();
	};

	useEffect(() => {
		startAutoPlay();

		return () => clearInterval(intervalRef.current);
	}, [startAutoPlay]);

	return (
		<div className={styles.carousel}>
			<div
				className={styles.carouselContainer}
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{React.Children.map(children, (child) => (
					<div className={styles.carouselSlide}>{child}</div>
				))}
			</div>

			{dots && (
				<div className={styles.carouselDots}>
					{React.Children.map(children, (_, index) => (
						<button
							type="button"
							aria-label={`Ir para o slide ${index + 1}`}
							className={`${styles.carouselDot} ${index === currentIndex ? styles.active : ""}`}
							onClick={() => goToSlide(index)}
						></button>
					))}
				</div>
			)}
		</div>
	);
}
