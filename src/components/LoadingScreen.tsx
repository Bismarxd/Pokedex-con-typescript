import styles from './loadingScreen.module.css'

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
        <img className={styles.loadingScreenIcon} src="/images/pokedex.png" alt="imagen pokedex" />
    </div>
  )
}

export default LoadingScreen