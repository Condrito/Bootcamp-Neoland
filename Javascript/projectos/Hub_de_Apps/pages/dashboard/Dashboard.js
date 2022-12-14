import './dashboard.css';
import { mantenerSaludo } from '../../utiles/utiles';
import { init } from '../../main';



export const createDashboard=()=>{
    document.querySelector('#app').innerHTML=`
    <div id="dashboardContainer">
    <button type= "button" id="pokeapiBtn">
    <img src="https://databar.ai/media/external_source_logo/pokeapi.png" alt="PokeApi">
    </button>
    <button type= "button" id="whacamoleBtn">
    <img src="./whacamoleIMG-removebg-preview.png">
    </button>
    </div>
    `
    mantenerSaludo()
    addEventPokeapi()

}
const homeVisible=()=>{
    document.querySelector("#homeBtn").style.display = 'block';
}
const addEventPokeapi=()=>{
    document.querySelector("#pokeapiBtn").addEventListener("click",()=>{
        init("pokeApi"),homeVisible()
    })
}