import './dashboard.css';
import { mantenerSaludo } from '../../utiles/utiles';
import { init } from '../../main';



export const createDashboard=()=>{
    document.querySelector('#app').innerHTML=`
    <div id="dashboardContainer">
    <button type= "button" id="pokeapiBtn">
    <img src="https://databar.ai/media/external_source_logo/pokeapi.png" alt="PokeApi">
    </button>
    </div>
    `
    mantenerSaludo()
    addEventPokeapi()

}

const addEventPokeapi=()=>{
    document.querySelector("#pokeapiBtn").addEventListener("click",()=>{
        init("pokeApi")
    })
}