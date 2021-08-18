const APIBaseUrl = 'https://pokeapi.co/api/v2/'
const PokeApi = {
  getPokemons: async function(num) {
    const pokemons = await axios.get(`${APIBaseUrl}pokemon?limit=${num}`)
    return pokemons.data.results
  },
  getPokemon: async function(id) {
    const pokemon = await axios.get(`${APIBaseUrl}pokemon/${id}/`)
    return pokemon.data
  }
}

// PokeApi.getPokemons(151)
//   .then((res) => {
//     console.table(res)
// })
// PokeApi.getPokemon(151)
//   .then((res) => {
//     console.log(res)
// })

// console.log('empezando');
// setTimeout(() => {
//   console.log('despues de 1000')
// }, 1000)
// setTimeout(() => {
//   console.log('despues de 2000')
// }, 
// 2000)
// setTimeout(() => {
//   console.log('despues de 3000')
// }, 3000)

// console.log('proceso terminado');

function returnPromise () {
  return new Promise((resolve, reject) => {
    axios.get(`${APIBaseUrl}pokemon?limit=${num}`)
    .then((pokemons) => {
      resolve(pokemons.data.results)
    })
  })
}