import { usePokemonList } from './api/pokemon'
import './App.css'
import PokemonCard from './PokemonCard'

function App() {
  const { pokemons, loading  }= usePokemonList(); 

  if (loading) {
    return (
  <div className="loading-container">
    <img 
      className="loading-image" 
      src="assets/Disk@1x-1.0s-200px-200px.gif" 
      alt="loading screen" 
    />
  </div>
);
  }

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
  );
}

export default App
