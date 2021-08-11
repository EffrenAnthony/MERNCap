const renderPokemons = (pokemons, targetDiv) => {
  const pokesHTML = pokemons
  .map((pokemon,index) => {
    console.log(index)
    return `
    <div>
      <p>${pokemon.name}</p>
    </div>
    `
  })
  .join(' ')
  // console.log(pokesHTML)
  targetDiv.innerHTML += `
    <div class="pokemons">
      <div class="pokemons__list">${pokesHTML}</div>
    </div>
  ` 
}

// <img src="https://pokeres.bastionbot.org/images/pokemon/${(index + 1).toString()}.png">