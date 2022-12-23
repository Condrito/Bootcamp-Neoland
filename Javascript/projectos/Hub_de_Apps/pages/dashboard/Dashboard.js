import './dashboard.css';
import { mantenerSaludo } from '../../utiles/utiles';



export const createDashboard=()=>{
    document.querySelector('#app').innerHTML=`
    <div id="dashboardContainer">
    <button type= "button" id="pokeapiBtn">
    <img src="https://databar.ai/media/external_source_logo/pokeapi.png" alt="PokeApi">
    </button>
    </div>
    `
    mantenerSaludo()

}