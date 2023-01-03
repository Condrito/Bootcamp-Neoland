import "./pokeapi.css";





let pokemonList = [];


const getData = async () => {

  try {
    for (let i = 1; i < 152; i++){
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await res.json();
    let pokemon = {
      img: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      id: data.id,
    };
    pokemonList.push(pokemon)
  }
  } catch (error) {
    document.querySelector("#app").innerHTML = `
    <h2>Debido a un problema no se ha podido realizar tu petición</h2>`;
  }
};


getData()

const printPokeCards=(list)=>{
  
 list.forEach(item => {
  const pokeCard = document.createElement("figure");
  pokeCard.classList.add("pokemonCard");
  pokeCard.innerHTML = `
        <p class="pokemonId" >${item.id}</p>
        <img class="pokemonImg" src="${item.img}" alt="${item.nombre}">
        <h3 class="pokemonName" >${item.nombre}</h3>
     
`;
  document.querySelector(".pokemonsContainer").appendChild(pokeCard);
  
 });
}


export const printPokemons = () => {
  document.querySelector("#app").innerHTML = ``;
  const pokemonListContainer = document.createElement("div");
  pokemonListContainer.classList.add("pokemonsContainer");
  document.querySelector("#app").appendChild(pokemonListContainer);
  pokemonListContainer.innerHTML=``;
  
  printPokeCards(pokemonList);
  
  
 
};


