"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Valorant from '@/utils/Valorant'
import Menu from '@/components/home/Menu';
import Banner from '@/components/home/Banner';
import Season from '@/components/home/Season';


export default function Home() {

  const [season, setSeason] = useState();
  const [act, setAct] = useState();

  useEffect(() => {
    async function fetchSeason() {
      const seasonData = await Valorant('seasons');
      const acts = seasonData.filter((act) => act.type === "EAresSeasonType::Act")
      const seasons = seasonData.filter((act) => act.type !== "EAresSeasonType::Act")

      const currentAct = acts.find(act => {
        const currentDate = new Date();
        const endTime = new Date(act.endTime);
        return currentDate < endTime;
      });
      const currentSeason = seasons.find(season => {
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

      <Season season={season} act={act} />
      
      <div className={styles.homeScreen}>

        <Menu />

        <Banner />
        
      </div>

    </div>
  );
}