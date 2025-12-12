"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./Carousel.module.css";

interface CarouselProps {
	children: React.ReactNode;
	dots?: boolean;
	current?: number;
}

export default function Carousel({ children, dots = false }: CarouselProps) {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const totalSlides: number = React.Children.count(children);
	const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

	const startAutoPlay = useCallback(() => {
		if (intervalRef.current) {
			if (intervalRef.current !== null) {
				clearInterval(intervalRef.current);
			}
		}

		intervalRef.current = setInterval(() => {
			setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
		}, 5000);
	}, [totalSlides]);

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
		startAutoPlay();
	};

	useEffect(() => {
		startAutoPlay();

		return () => {
			if (intervalRef.current !== null) {
				clearInterval(intervalRef.current);
			}
		};
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
