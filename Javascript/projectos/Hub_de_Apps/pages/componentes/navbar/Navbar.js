import './navbar.css'
import { init } from '../../../main'
import { activeLogoutBtn } from '../../../utiles/utiles'


export const createNavbar = ()=>{
let nadvar = document.createElement('div')
nadvar.setAttribute("id","nadvar")
nadvar.innerHTML= `

<p id="saludo"></p>
<button type = "button" id="logoutBtn">Logout</buton>
<button type = "button" id="colormodeBtn">Color Mode</buton>
<button type = "button" id="homeBtn"><span class="material-symbols-outlined">
home
</span></buton>

`
document.querySelector('header').appendChild(nadvar)



addEventLogout() 
addEventBackHome()

}





const clearSaludo =()=>{
    let saludo=document.querySelector("#saludo")
    saludo.innerHTML=''

    localStorage.clear()
    activeLogoutBtn()

    init(undefined)

}

const addEventLogout =()=>{
    let logoutBtn = document.querySelector("#logoutBtn")
    logoutBtn.addEventListener("click",()=>{clearSaludo()})
    
    
}
const homeBtnInvisible =()=>{
    let homeBtn = document.querySelector("#homeBtn")
    homeBtn.style.display = 'none';
}

const addEventBackHome =()=>{
    let homeBtn = document.querySelector("#homeBtn")
    homeBtn.addEventListener("click",()=>{init("dashboard"),homeBtnInvisible()})
    
    
}