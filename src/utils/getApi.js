const axios = require('axios')

const getApiPokemon = (namepokemon) => {
   const teste =  axios.get(`https://pokeapi.co/api/v2/pokemon/${namepokemon}`)
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    return teste;
}

export default getApiPokemon;