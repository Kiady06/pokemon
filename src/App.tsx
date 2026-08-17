import { usePokemonList } from './api/pokemon'
import './App.css'
import MainPageComponent from './MainPageComponent';

function App() {
  const { pokemons, loading  }= usePokemonList(); 

  // Tsy mandeha
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
      <MainPageComponent pokemons={pokemons} />
    </>
  );
}

export default App
