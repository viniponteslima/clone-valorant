import { playerStates } from "@/data/playerStates";
import type { PlayerState } from "@/types/PlayerState";
import styles from "./PlayerCard.module.css";

interface PlayerCardProps {
	playerState?: PlayerState;
	playerName: string;
	playerImage: string;
	playerBackground?: string;
}

export default function PlayerCard({
	playerState = "Ausente",
	playerName,
	playerImage,
	playerBackground = "transparent",
}: PlayerCardProps) {
	const { textState, colorState } = playerStates[playerState];

	return (
		<div className={styles.playerCard}>
			<div
				className={styles.image}
				style={{
					background: `${playerBackground} url(${playerImage}) no-repeat`,
					backgroundSize: "cover",
				}}
			>
				<span style={{ backgroundColor: colorState }}></span>
			</div>

			<div className={styles.playerInfo}>
				<h2>{playerName}</h2>
				<span style={{ color: colorState }}>{textState}</span>
			</div>
		</div>
	);
}
