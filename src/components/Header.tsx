import styles from './header.module.css'

type HeaderProps = {
    consulta: string;
    setConsulta: (consulta: string) => void;
}

const Header = ({consulta, setConsulta}: HeaderProps) => {

  return (
    <header className={styles.header}>

        <input 
            type="text" 
            placeholder="Buscar Pokemon" 
            className={styles.input} 
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            />

    </header>
  )
}

export default Header