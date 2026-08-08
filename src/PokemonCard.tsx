import type { PokemonProps } from "./api/pokemon";

function PokemonCard(pokemon: PokemonProps) {

    return (
        <div className="card">
            <p className="id" >{ pokemon.pokemon.id }</p>
            <img  className="sprite" src={ pokemon.pokemon.sprite } alt={ pokemon.pokemon.name } />
            <h2 className="name" >{ pokemon.pokemon.name }</h2>
        </div>
    );
}

export default PokemonCard;