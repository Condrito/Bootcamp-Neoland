import "./pokeapi.css";
import { printPokeSearcher } from "../componentes/searcher/Searcher";
import { typesColors } from "../../utiles/poketypes";

export const pokemonList = [];

const getData = async () => {
  try {
    for (let i = 1; i < 152; i++) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await res.json();
      let pokemon = {
        img: data.sprites.other.dream_world.front_default,
        nombre: data.name,
        id: data.id,
        tipos: data.types,
        hp:data.stats[0].base_stat,
        attack:data.stats[1].base_stat,
        defense:data.stats[2].base_stat,
        specialAttack:data.stats[3].base_stat,
        specialDefense:data.stats[4].base_stat,
        speed:data.stats[5].base_stat,
      };

      pokemonList.push(pokemon);
    }
  } catch (error) {
    document.querySelector("#app").innerHTML = `
    <h2>Debido a un problema no se ha podido realizar tu petición</h2>`;
  }
};

getData();

export const printPokeCards = (list) => {
  list.forEach((item) => {
    const pokeCard = document.createElement("figure");
    pokeCard.classList.add("pokemonCard");
    const tipo1 = item.tipos[0].type.name;
    const tipo2 = item.tipos[1] ? item.tipos[1].type.name : "";

    pokeCard.innerHTML = `
    <div class="headerCard">
    <p class="pokemonId" >${item.id}</p>
    <div class="typesContainer">
        <p class="pokemonType">${tipo1}</p>
        <p class="pokemonType">${tipo2}</p>
        </div>
        </div>
       
        <img class="pokemonImg" src="${item.img}" alt="${item.nombre}">
        <h3 class="pokemonName" >${item.nombre}</h3>
        
        <div class="statsContainer">
        <p class="pokemonType">Hp ${item.hp}</p>
        <p class="pokemonType">Attack ${item.attack}</p>
        <p class="pokemonType">Defense ${item.defense}</p>
        <p class="pokemonType">Special Attack ${item.specialAttack}</p>
        <p class="pokemonType">Special Defense ${item.specialDefense}</p>
        <p class="pokemonType">Speed ${item.speed}</p>
        </div>
`;

const addTypeClass= tipo2 ? (pokeCard.classList.add(`${tipo2}`)||pokeCard.classList.add(`${tipo1}`)) : pokeCard.classList.add(`${tipo1}`)
   
    document.querySelector(".pokemonsContainer").appendChild(pokeCard);

   let colorOne=""
   let colorTwo= ""
    for (const type1 in typesColors) {
      if (tipo1 == type1) {
        colorOne = typesColors[type1];
        colorTwo= colorOne
      }
      
      for (const type2 in typesColors) {
        if (tipo2 == type2) {
          colorTwo = tipo2 ? typesColors[type2] : colorOne;
          
        
        }
       
      }
      
    }
    pokeCard.style.background =  `linear-gradient(to right, ${colorOne}, ${colorTwo})`;
     
  });
};

export const printPokemons = () => {
  document.querySelector("#app").innerHTML = ``;
  const pokemonListContainer = document.createElement("div");
  pokemonListContainer.classList.add("pokemonsContainer");
  document.querySelector("#app").appendChild(pokemonListContainer);
  pokemonListContainer.innerHTML = ``;
  printPokeSearcher();

  printPokeCards(pokemonList);
};
