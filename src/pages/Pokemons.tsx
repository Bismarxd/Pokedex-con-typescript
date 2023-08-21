import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

import styles from './pokemons.module.css'
import { fetchPokemons } from "../api/fetchPokemons";
import { Pokemon } from "../types/types";
import LoadingScreen from "../components/LoadingScreen";
import { waitFor } from "../utils/utils";

const Pokemons = () => {
    const [estaCargando, setEstaCargando] = useState(false)
    const [consulta, setConsulta] = useState("");
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        try {
            const fecthAllPokemons = async () => {
                setEstaCargando(true);
                await waitFor(2000);
                const allPokemons = await fetchPokemons();
                console.log(allPokemons);
                
                setPokemons(allPokemons);
                setEstaCargando(false)
            };
            fecthAllPokemons();
            
        } catch (error) {
            console.log(error);
            
        }
       
        
    }, [])

    if (estaCargando || !pokemons) {
        return <LoadingScreen/>
    }

    const filtersPokemons = pokemons?.slice(0, 151).filter((pokemon) => {
        return pokemon.name.toLowerCase().match(consulta.toLocaleLowerCase())
    });

    return (
        <>
            <Header 
                consulta={consulta}
                setConsulta={setConsulta}
            
            />

            <main>
                <nav className={styles.nav}>
                    {filtersPokemons?.slice(0, 151).map((pokemon) => (
                         <Link key={pokemon.id} to={`/pokemons/${pokemon.name.toLowerCase()}`} className={styles.listItem}>
                            <img
                            className={styles.listItemIcon}
                            src={pokemon.imgSrc}
                            alt={pokemon.name}
                            />
                            <div className={styles.listItemText}>
                                <span>{pokemon.name}</span>
                                <span>{pokemon.id}</span>
                            </div>
                         </Link>
                    ))}
                   
                </nav>
            </main>

           <Footer/>
        </>
    );
};

export default Pokemons;