"use client";
import { useEffect, useState } from "react";
import Valorant from "@/utils/Valorant";
import styles from "./SocialBar.module.css";
import PlayerCard from "./social/PlayerCard";
import QuantityCard from "./social/QuantityCard";

export default function SocialBar() {
	const [agents, setAgents] = useState([]);

	useEffect(() => {
		async function fetchAgents() {
			const agentsData = await Valorant("agents");
			setAgents(agentsData || []);
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

			{agents &&
				agents.map(
					(agent) =>
						agent.isPlayableCharacter && (
							<PlayerCard
								state="EmJogo"
								key={agent.uuid}
								name={agent.displayName}
								image={agent.displayIcon}
								bgColor={`#${agent.backgroundGradientColors[3]}`}
							/>
						),
				)}
		</div>
	);
}
