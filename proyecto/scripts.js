/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

let pokemonsList = []
// console.log(PokeApi.getPokemons(5))
PokeApi.getPokemons(151)
.then(
  function (arregloPokemons) {
    // console.log(arregloPokemons);
    pokemonsList = arregloPokemons
    let pokelist = document.getElementById("poke-list")
    renderPokemons(arregloPokemons, pokelist)
  }
)

function searchPokemons() {
  let inputValue = document.getElementById("pokemonSearch").value
  // console.log(inputValue)
  // filtrar el arreglo de pokemons
  let filteredPokemons = pokemonsList.filter(pokemon => pokemon.name.includes(inputValue) )
  let pokelist = document.getElementById("poke-list")
  re_renderPokemons(filteredPokemons, pokelist)
  // re renderizar
}

function showOnePokemon(idPoke) {

  PokeApi.getPokemon(idPoke)
  .then(pokemon =>{
    // console.log(pokemon)
    let pokeElement = document.getElementById("pokemon_view")
    renderSinglePokemon(pokemon,pokeElement)
  })
}