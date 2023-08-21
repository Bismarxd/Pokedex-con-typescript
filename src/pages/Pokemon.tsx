import {useNavigate, useParams} from 'react-router-dom'
import Footer from '../components/Footer';
import styles from './pokemon.module.css'
import { pokemonDetails } from '../types/types';
import { useEffect, useState } from 'react';
import { fetchPokemon } from '../api/fetchPokemon';
import LoadingScreen from '../components/LoadingScreen';
import { waitFor } from '../utils/utils';

const Pokemon = () => {
    const [estaCargando, setEstaCargando] = useState(false)
    const [pokemon, setPokemon] = useState<pokemonDetails>();

    const {name} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function getPokemon() {
            setEstaCargando(true)
            await waitFor(1000);
            const fetchedPokemon = await fetchPokemon(name as string)
            
            setPokemon(fetchedPokemon)
            setEstaCargando(false)
        }
        getPokemon()
    }, [name])

    if (estaCargando || !pokemon) {
        return <LoadingScreen/>
    }


    return (
        <>
                <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
                    <img className={styles.pokeballImg} src="/images/pokeball.png" alt="imagen pokeball" /> Atras
                </button>

                <div className={styles.pokemon}>
                    <main className={styles.pokemonInfo}>
                        <div className={styles.pokemonTitle}>{pokemon?.name?.toUpperCase()}</div>
                        <div>Nr. {pokemon?.id}</div>
                        <div>
                            <img className={styles.pokemonInfoImage} src={pokemon?.imgSrc} alt={pokemon?.name}/>
                        </div>
                        <div>HP: {pokemon?.hp}</div>
                        <div>ATK: {pokemon?.attack}</div>
                        <div>DEF: {pokemon?.defense}</div>
                    </main>
                </div>
            <Footer/>
        </>
    );
};

export default Pokemon;