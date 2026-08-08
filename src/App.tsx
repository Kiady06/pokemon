import { usePokemonList } from './api/pokemon'
import './App.css'
import PokemonCard from './PokemonCard'

function App() {
  const { pokemons  }= usePokemonList(); 

  return (
    <>
    <h1>Pokemons</h1>
    <div className='cards-container'>
      {
        pokemons.map((onePokemon) => (
          <PokemonCard  pokemon={ onePokemon } />
        )
      )
      }
      </div>
    </>
  )
}

export default App
