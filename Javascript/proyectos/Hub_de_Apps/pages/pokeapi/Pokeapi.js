import "./pokeapi.css";
import { printPokeSearcher } from "../componentes/searcher/Searcher";
import { typesColors } from "../../utiles/poketypes";
import { typesIncons } from "../../utiles/poketypes";


export const pokemonList = [];
const pokedata=[]

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
        weight: data.weight,
        height: data.height,
        
      };
      
      pokedata.push(pokemon.height)
      pokemonList.push(pokemon);
      
    }
    
  } catch (error) {
    document.querySelector("#app").innerHTML = `
    <h2>Debido a un problema no se ha podido realizar tu petición</h2>`;
  }
};
console.log(pokedata)
getData();

export const printPokeCards = (list) => {
  list.forEach((item) => {
    const pokeCard = document.createElement("figure");
    pokeCard.classList.add("pokemonCard");
    pokeCard.classList.add(`${item.nombre}`)
    const front = document.createElement("div")
    front.classList.add("front")
    front.classList.add("card")
    pokeCard.appendChild(front)
    const back = document.createElement("div")
    back.classList.add("back")
    back.classList.add("card")
    pokeCard.appendChild(back)
    const tipo1 = item.tipos[0].type.name;
    const tipo2 = item.tipos[1] ? item.tipos[1].type.name : "";


    let iconOne=""
   let iconTwo= ""
    for (const type1 in typesIncons) {
      if (tipo1 == type1) {
        iconOne = typesIncons[type1];
        iconTwo= iconOne
      }
      
      for (const type2 in typesIncons) {
        if (tipo2 == type2) {
          iconTwo = typesIncons[type2];
          
        
        }
       
      }
      
    }
    
    front.innerHTML = `
    <div class="headerCard">
    <p class="pokemonId" >${item.id}</p>
    <div class="typesContainer">
    
        ${item.tipos.length > 1
          ? ` <div class="nombreTipo">${tipo1}<img class="icon" src=${iconOne} alt=${tipo1} /></div>
          <div class="nombreTipo">${tipo2} <img class="icon" src=${iconTwo} alt=${tipo2} /></div>`
          : `<div class="nombreTipo">${tipo1}<img class="icon" src=${iconOne} alt=${tipo1} /></div>`}
        </div> 
        </div>
       
        <img class="pokemonImg" src="${item.img}" alt="${item.nombre}">
        <h3 class="pokemonName" >${item.nombre}</h3>
    
    `

          
    back.innerHTML = `
        
        
        <p>Weight ${item.weight}  <meter min='0' max='4600' value='${item.weight}'></meter> </p>    
        <p>Height ${item.height}  <meter min='0' max='88' value='${item.height}'></meter> </p>
        <p>Hp ${item.hp}  <meter min='0' max='250' value='${item.hp}'></meter> </p>
        <p>Speed ${item.speed}  <meter min='0' max='150' value='${item.speed}'></meter> </p> 
        <p>Attack ${item.attack}  <meter min='0' max='134' value='${item.attack}'></meter> </p>
        <p>Defense ${item.defense}  <meter min='0' max='180' value='${item.defense}'></meter> </p>
        <p>Special Attack ${item.specialAttack}  <meter min='0' max='154' value='${item.specialAttack}'></meter> </p>
        <p>Special Defense ${item.specialDefense}  <meter min='0' max='125' value='${item.specialDefense}'></meter> </p>
        
      
        
      
        
        
`;

const addTypeClass= tipo2 ? (pokeCard.classList.add(`${tipo2}`)||pokeCard.classList.add(`${tipo1}`)) : pokeCard.classList.add(`${tipo1}`)
   
    document.querySelector(".pokemonsContainer").appendChild(pokeCard);
   // const frontCard =document.querySelector(".front")
   // frontCard.classList.add("frontCard")

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
    
    front.style.background =  `linear-gradient(to right, ${colorOne}, ${colorTwo})`; 
    back.style.background =  `linear-gradient(to right, ${colorTwo}, ${colorOne})`;
    
    
     
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
