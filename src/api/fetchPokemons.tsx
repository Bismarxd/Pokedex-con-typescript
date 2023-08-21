import { Pokemon } from "../types/types";
import { formatName } from "../utils/utils";

export async function fetchPokemons(): Promise<Pokemon[]> {
    const respuesta = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');

    if (!respuesta.ok) {
        throw new Error('Error al consultar la api de pokemons')
    }

    interface Pokemons {
        name: string;
        id: number;
        imgSrc: string;
        national_number: number;
      }
    const resultado: Pokemons[] = await respuesta.json();

    const pokemons = resultado.results.map((pokemon: Pokemons) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(pokemon.name).toLowerCase()}.gif`,
    }));

    const unicoPokemons = pokemons.filter((pokemon, index, array) => {
        return array.findIndex(
          (other) => other.id === pokemon.id
        ) === index;
      }) as Pokemons[];

    return unicoPokemons;
}