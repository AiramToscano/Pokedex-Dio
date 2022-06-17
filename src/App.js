import React from 'react';
import './App.css';
import PokedexProvider from './Context/PokedexProvider';
import Pokedex from './pages/pokedex';

function App() {
  return (
    <PokedexProvider>
      <Pokedex />
    </PokedexProvider>
  );
}

export default App;