import './searcher.css'
import { pokemonList } from '../../pokeapi/Pokeapi'
import { printPokeCards } from '../../pokeapi/Pokeapi'
import { typesColors } from '../../../utiles/poketypes'


export const printPokeSearcher =()=>{
    const pokeSearcherContainer= document.createElement("div")
    pokeSearcherContainer.classList.add("pokeSearcher")
    document.querySelector(".pokemonsContainer").insertAdjacentElement("beforebegin",pokeSearcherContainer)
    pokeSearcherContainer.innerHTML=`
    <input type="text" id="pokeSearcherInput" placeholder="Pokémon name"></input>
    <select id="typeSelect" >
    <option value="@fff" >Pokémon Type</option></select>
    `
    addEventShearchInput()
    addOptionsToSearchByType()
    addEventShearchByType()
}




const pokeFilter=(inputString)=>{
    const shearchPokemon = pokemonList.filter((pokemon) => pokemon.nombre.includes(inputString));
  
  document.querySelector(".pokemonsContainer").innerHTML=``;
    printPokeCards(shearchPokemon)
}

const addEventShearchInput =()=>{
    document.querySelector("#pokeSearcherInput").addEventListener('input', (ev) => pokeFilter(ev.target.value))
}
const pokeType=(select)=>{
    document.querySelector(".pokemonsContainer").innerHTML=``;
    printPokeCards(pokemonList)
    const pokeCards = document.querySelectorAll('.pokemonCard');
    const pokeCardsType=document.querySelectorAll(`.${select}`)
pokeCards.forEach(function(pokeCard) {
  pokeCard.style.display = 'none';
});
pokeCardsType.forEach(function(pokeCardType) {
    pokeCardType.style.display = 'block';
});

}


const addEventShearchByType =()=>{
    
    document.querySelector("#typeSelect").addEventListener('change', (ev) => pokeType(ev.target.value))
}
    

const addOptionsToSearchByType = () => {

    for (const type in typesColors) {
        const option = document.createElement("option");
        option.value = type;
        option.innerText =type;
        document.querySelector('#typeSelect').append(option);
    }
  };