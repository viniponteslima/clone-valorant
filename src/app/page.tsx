"use client";
import { useEffect, useState } from "react";
import Valorant from "@/utils/Valorant";
import Banner from "$/home/Banner";
import Menu from "$/home/Menu";
import Season from "$/home/Season";
import styles from "./page.module.css";

interface SeasonType {
	id: string;
	type: string;
	startTime: string;
	endTime: string;
	displayName: string;
	assetPath: string;
}

export default function Home() {
	const [season, setSeason] = useState<SeasonType | undefined>();
	const [act, setAct] = useState<SeasonType | undefined>();
	useEffect(() => {
		async function fetchSeason() {
			const seasonData = await Valorant("seasons");
			const acts = seasonData.filter(
				(act: SeasonType) => act.type === "EAresSeasonType::Act",
			);
			const seasons = seasonData.filter(
				(season: SeasonType) => season.type !== "EAresSeasonType::Act",
			);

			const currentAct = acts.find((act: SeasonType) => {
				const currentDate = new Date();
				const endTime = new Date(act.endTime);
				return currentDate < endTime;
			});
			const currentSeason = seasons.find((season: SeasonType) => {
				const currentDate = new Date();
				const endTime = new Date(season.endTime);
				return currentDate < endTime;
			});
			setAct(currentAct || seasonData[seasonData.length - 1]);
			setSeason(currentSeason || seasonData[seasonData.length - 1]);
		}

		fetchSeason();
	}, []);

	return (
		<div className={styles.home}>
			<Season
				season={season ?? { displayName: "", title: "" }}
				act={act ?? { displayName: "", title: "" }}
			/>

			<div className={styles.homeScreen}>
				<Menu />
				<Banner />
			</div>
		</div>
	);
}
