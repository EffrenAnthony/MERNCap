const renderPokemons = (pokemons, targetElement) => {
  const pokesHTML = pokemons.map((pokemon,index) => {
    let pokeSplit = pokemon.url.split('/')
    let idPoke = pokeSplit[pokeSplit.length - 2]
    return `
    <div class='pokemons__list-item' onclick='showOnePokemon(${idPoke})'>
    <img style='width: 50px' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPoke}.png' >
      <p>${pokemon.name}</p>
    </div>
    `
  })
  .join(' ')
  // console.log(pokesHTML);
  // console.log(pokesHTML)
  targetElement.innerHTML += `
    <div>
      <div>${pokesHTML}</div>
    </div>
  ` 
}
const re_renderPokemons = (pokemons, targetElement) => {
  const pokesHTML = pokemons.map((pokemon,index) => {
    // console.log(index)
    let pokeSplit = pokemon.url.split('/')
    let idPoke = pokeSplit[pokeSplit.length - 2]
    return `
    <div class='pokemons__list-item' onclick='showOnePokemon(${idPoke})'>
      <p>${pokemon.name}</p>
    </div>
    `
  })
  .join(' ')
  // console.log(pokesHTML);
  // console.log(pokesHTML)
  targetElement.innerHTML = `
    <div>
      <div class="pokemons__list">${pokesHTML}</div>
    </div>
  ` 
}


const renderSinglePokemon = (pokemon, targetElement) => {
  const pokeAbilities = pokemon.abilities.map((ability,index) => {
      return `
        <span>${ability.ability.name}</span>
      `
    })
    .join(' ')

  const pokemoves = pokemon.moves.map((move, index) => {
    return`
      <h1>${move.move.name}</h1>
    `
  }).join(' ')
  targetElement.innerHTML = `

    <div>
      <h3  class='pokemons__name'>${pokemon.name}</h3>
      <!--<img src="${pokemon.sprites.front_default}">-->
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png">
      <div>
        ${pokeAbilities}
      </div>
      <div>
        ${pokemoves}
      </div>
    </div>

  ` 
}
// <img src="https://pokeres.bastionbot.org/images/pokemon/${(index + 1).toString()}.png">