import { useEffect, useState } from "react";

export interface Pokemon {
    id: number;
    name: string;
    sprite: string;
}

interface ApiRes {
    url: string;
    name: string;
}

interface PokemonListRes {
  results: ApiRes[];
}

export interface PokemonProps {
    pokemon: Pokemon;
}

function toPokemon(apiRes:  ApiRes): Pokemon {
    const id =  parseInt(apiRes.url.split("/")[6]);

    return  {
        name: apiRes.name,
        id: id,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    }
}

export function usePokemonList() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const response: Response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");

                if (!response.ok) {
                    throw new Error(`HTTP error ! Statut : ${response.status}`);
                }

                const datas: PokemonListRes = await response.json();
                
                const pokemonsList: Pokemon[] = datas.results.map(toPokemon);

                setPokemons(pokemonsList);

            } catch (error) {
                console.error(`Erreur : ${error}`);

                setPokemons([]);
            } finally {
                setLoading(false);
            }
            
        }

        fetchPokemons();

    }, []);

    return ({ pokemons, loading});
}

export function filterByName(query: string, pokemons: Pokemon[]): Pokemon[] {
    return pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
}