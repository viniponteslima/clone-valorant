import styles from "./BackgroundVideo.module.css";

interface BackgroundVideoProps {
	src: string;
}

export default function BackgroundVideo({ src }: BackgroundVideoProps) {
	return (
		<video
			className={styles.video}
			autoPlay
			muted
			loop
			id="backgroundVideo"
			src={src}
		/>
	);
}
