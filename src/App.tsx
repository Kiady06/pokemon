import { usePokemonList } from './api/pokemon'
import './App.css'
import PokemonCard from './PokemonCard'

function App() {
  const { pokemons, loading }= usePokemonList(); 

  return (
    <>
      {
        pokemons.map((onePokemon) => (
          <PokemonCard  pokemon={ onePokemon } />
        )
      )
      }
    </>
  )
}

export default App
