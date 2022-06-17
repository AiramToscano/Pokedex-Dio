import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PokedexContext from './PokedexContext';
import getApi from '../utils/getApi';


function PokedexProvider({ children }) {
  const [namepokemon, setnamepokemon] = useState('');
  const [namepokemonbutton, setnamepokemonbutton] = useState([]);
  const [pokemonimage, setpokemonimage] = useState('https://images.tcdn.com.br/img/img_prod/1002138/descanso_de_panela_pokedex_pokemon_1735_1_d2843aba1deab0f17380617026880b0a.jpg');
  const [pokemonname, setpokemonname] = useState('');
  const [pokemonHeight, setpokemonHeight] = useState('');
  const [pokemonWeight, setpokemonWeight] = useState('');
  const [pokemontypes, setpokemontypes] = useState([]);
  
  const filtername = (e) => {
      setnamepokemon(e);
  }
  const buttonNamePokemon =  async(e) => {
   const pokemons = await getApi(e);
   console.log(pokemons);
   if(pokemons === undefined) {
    setnamepokemonbutton([]);
    setpokemonimage('https://cdn.dribbble.com/users/4040675/screenshots/10545158/media/85a3329e4202059593616d3b42f16e8d.png?compress=1&resize=400x300');
    setpokemonname('POKEMON NÃO ENCONTRADO');
    setpokemonHeight('');
    setpokemonWeight('');
    setpokemontypes([]);
   }
   setnamepokemonbutton(pokemons);
   setpokemonimage(pokemons.sprites.front_default);
   setpokemonname(pokemons.name);
   setpokemonHeight(pokemons.height);
   setpokemonWeight(pokemons.weight);
   setpokemontypes(pokemons.types);
  }
  const Provider = {
    filtername,
    namepokemon,
    namepokemonbutton,
    buttonNamePokemon,
    pokemonimage,
    pokemonname,
    pokemonHeight,
    pokemonWeight,
    pokemontypes

  };

  return (
    <PokedexContext.Provider value={ { Provider } }>
      {children}
    </PokedexContext.Provider>
  );
}

PokedexProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default PokedexProvider;
