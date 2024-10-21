import styles from './PlayerCard.module.css';

export default function PlayerCard({ state='Ausente', name, image, bgColor='#888888' }) {

  
  const categories = {
    Disponivel: {
      texto:'Disponível',
      cor: `#5DA296`
    },
    EmJogo: {
      texto:'Em Jogo',
      cor: '#54A3DA'
    },
    Ausente: {
      texto:'Ausente',
      cor: '#98999A'
    },
  }

  state = categories[state] ? state : 'Ausente'
  const texto = categories[state].texto
  const cor = categories[state].cor

  return (
    <div className={styles.playerCard}>
      <div className={styles.image} style={{backgroundColor: bgColor}}>
        <img src={image} alt='' />
        <span style={{backgroundColor:cor}}></span>
      </div>
      <div className={styles.playerInfo}>
        <h2>{name}</h2>
        <span style={{color: cor}}>{texto}</span>
      </div>
    </div>
  );
}