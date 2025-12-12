"use client";
import { useEffect, useState } from "react";
import type { Agent } from "@/types/Agent";
import Valorant from "@/utils/Valorant";
import styles from "./SocialBar.module.css";
import PlayerCard from "./social/PlayerCard";
import QuantityCard from "./social/QuantityCard";

export default function SocialBar() {
	const [agents, setAgents] = useState<Agent[]>([]);
	const [quantityAgents, setQuantityAgents] = useState<number>(0);

	useEffect(() => {
		async function fetchAgents() {
			const agentsData = await Valorant("agents");

			const playableAgents = agentsData.filter(
				(agent: Agent) => agent.isPlayableCharacter,
			);

			setAgents(playableAgents);
			setQuantityAgents(playableAgents.length);
		}

		fetchAgents();
	}, []);

	return (
		<div className={styles.socialBar}>
			<PlayerCard
				playerState="Disponivel"
				playerName="Vinícius Lima"
				playerImage="https://github.com/viniponteslima.png"
			/>

			<QuantityCard len={quantityAgents} title="Conectado(a)" />

			{agents.map((agent) => (
				<PlayerCard
					playerState="EmJogo"
					key={agent.uuid}
					playerName={agent.displayName}
					playerImage={agent.displayIcon}
					playerBackground={`#${agent.backgroundGradientColors[2]}`}
				/>
			))}
		</div>
	);
}
