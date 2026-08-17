import { useState } from "react";
import QueryComponent from "./QueryComponent";
import PokemonCard from "./PokemonCard";
import { filterByName, type Pokemon } from "./api/pokemon";


function MainPageComponent({ pokemons }: { pokemons: Pokemon[] }) {
    const [query, setQuery] = useState<string>("");

    const filteredPokemons = filterByName(query, pokemons);

    return (
        <>
            <QueryComponent onQueryChange={setQuery} />

            <h1>Pokemons</h1>

            <div className="cards-container">
                {filteredPokemons.map((onePokemon) => (
                    <PokemonCard
                        key={onePokemon.id}
                        pokemon={onePokemon}
                    />
                ))}
            </div>
        </>
    );
}

export default MainPageComponent;