import {Link} from 'react-router-dom'
import styles from './footer.module.css'

//assets


const Footer = () => {
  return (
    <footer className={styles.footer}>
        <Link 
            to="/pokemons" 
            className={styles.footerLink}
            onClick={e => e.preventDefault()}
        >
            <img src="/images/pikachu.png" alt="pokeball" className={styles.footerIcon}/>
            Pokemons
        </Link>
        <Link 
            to="/pokemons" 
            className={styles.footerLink}
            onClick={e => e.preventDefault()}
        >
            <img src="/images/pokeball.png" alt="pokeball" className={styles.footerIcon}/>
            Items
        </Link>
        <Link 
            to="/pokemons" 
            className={styles.footerLink}
            onClick={e => e.preventDefault()}
        >
            <img src="/images/pointer.png" alt="pokeball" className={styles.footerIcon}/>
            Mapa
        </Link>
    </footer>
  )
}

export default Footer