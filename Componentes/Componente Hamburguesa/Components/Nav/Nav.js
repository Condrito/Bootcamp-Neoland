
import './nav.css'
import { navMenu } from './Info/Info'
import {menu} from './Info/Info'

export const createNav = ()=> {
    document.querySelector('#container').innerHTML= `
    <button class="nav-btn open-btn">
    <i class="fas fa-bars"></i>
  </button>
    <div class="nav nav-yellow">
    <div class="nav nav-red">
      <div class="nav nav-white">
        <button class="nav-btn close-btn">
          <i class="fas fa-times"></i>
        </button>
        <img
          src="https://img.freepik.com/vector-premium/diseno-logotipo-hamburguesa_9845-25.jpg?w=2000"
          alt="Logo" class="logo">
        <ul class="list"></ul>
      </div>
    </div>
  </div>
  `

createMenu()
}

const createMenu = () => {
  navMenu.forEach(element=>{
  document.querySelector('.list').innerHTML +=`
  <li class = "indice"><p>${element.indice}<a href="#"><span class="material-symbols-outlined">
  expand_more
  </span></a></p>
  </li>`

})
};

  
const paintSubmenu = ()=>{
navMenu.forEach(element=>{
document.querySelector('.indice').innerHTML += `
<p>${element.subindice[nombre]}</p>`
  
})}
