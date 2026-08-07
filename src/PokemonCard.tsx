import type { PokemonProps } from "./api/pokemon";

function PokemonCard(pokemonProps: PokemonProps) {

    return (
        <div className="card">
            <p className="id" >{ pokemonProps.pokemon.id }</p>
            <img  className="sprite" src={ pokemonProps.pokemon.sprite } alt={ pokemonProps.pokemon.name } />
            <h2 className="name" >{ pokemonProps.pokemon.name }</h2>
        </div>
    );
}

export default PokemonCard;