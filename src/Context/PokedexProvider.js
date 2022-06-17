import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PokedexContext from './PokedexContext';


function PokedexProvider({ children }) {
  const [namepokemon, setnamepokemon] = useState('');
  
  const filtername = (e) => {
      setnamepokemon(e);
  }
  const Provider = {
    filtername,
    namepokemon,
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
