import Link from 'next/link';
import styles from './Banner.module.css';
import Carousel from '../general/Carousel';
import ItemCarousel from '../general/ItemCarousel';
import { mdiGithub, mdiLinkedin, mdiInstagram } from '@mdi/js';
import Icon from '@mdi/react';

export default function Banner() {

  const carousel = [
    {
      text: 'Veja meus projetos no GitHub!',
      href: 'https://github.com/viniponteslima/',
      image: {
        icon: mdiGithub,
        bgColor: '#000000'
      }
    },
    {
      text: 'Conecte-se comigo no LinkedIn!',
      href: 'https://www.linkedin.com/in/viniciusponteslima/',
      image: {
        icon: mdiLinkedin,
        bgColor: '#0A66C2'
      }
    },
    {
      text: 'Siga-me no Instagram!',
      href: 'https://www.instagram.com/viniciuslima.dev/',
      image: {
        icon: mdiInstagram,
        bgColor: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
      }
    }
  ]
  return (
    <aside className={styles.bannersContainer}>
      <Link href={'https://github.com/viniponteslima/clone-valorant'} target='_blank' className={styles.thisProject}>
        <Icon path={mdiGithub} size={6} />
        <h3>Acompanhe este projeto no GitHub!</h3>
      </Link>

      <div className={styles.social}>
        <Carousel dots={true}>
          {
            carousel && (
              carousel.map((item, index) => (
                <ItemCarousel key={index} href={item.href} caption={item.text} image={item.image} />
              ))
            )
          }
        </Carousel>
      </div>

    </aside>
  );
}