"use client";
import { useEffect, useState } from "react";
import Valorant from "@/utils/Valorant";
import styles from "./SocialBar.module.css";
import PlayerCard from "./social/PlayerCard";
import QuantityCard from "./social/QuantityCard";

export default function SocialBar() {
	const [agents, setAgents] = useState([]);
	const [quantityAgents, setQuantityAgents] = useState(0);

	useEffect(() => {
		async function fetchAgents() {
			const agentsData = await Valorant("agents");
			const playableAgents = agentsData.filter(
				(agent) => agent.isPlayableCharacter,
			);
			setAgents(playableAgents || []);
			setQuantityAgents(playableAgents ? playableAgents.length : 0);
		}

		fetchAgents();
	}, []);

	return (
		<div className={styles.socialBar}>
			<PlayerCard
				state="Disponivel"
				name="Vinícius Lima"
				image={`https://github.com/viniponteslima.png`}
			/>

			<QuantityCard len={agents ? agents.length : 0} title={"Conectado(a)"} />

			{quantityAgents > 0 &&
				agents.map((agent) => (
					<PlayerCard
						state="EmJogo"
						key={agent.uuid}
						name={agent.displayName}
						image={agent.displayIcon}
						bgColor={`#${agent.backgroundGradientColors[3]}`}
					/>
				))}
		</div>
	);
}
