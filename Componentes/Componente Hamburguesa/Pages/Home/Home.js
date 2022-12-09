import './home.css'
import {createNav} from '../../Components/Nav/Nav'

export const createHome = () =>{
document.querySelector('#app').innerHTML = `
  <img
    src="https://img.freepik.com/vector-premium/diseno-logotipo-hamburguesa_9845-25.jpg?w=2000"
    alt="hamburguesa" class="logo">

  <p class="text">Componente Hamburguesa</p>
  <div id = "container"></div>
  `
createNav();
}   