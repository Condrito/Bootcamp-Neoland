import './navbar.css'
import { loginExe } from '../../login/login'




 




export const createNavbar = ()=>{
let nadvar = document.createElement('div')
nadvar.setAttribute("id","nadvar")
nadvar.innerHTML= `
<p id="saludo"></p>
<div id="buttonContainer"></div>
<button type = "button" id="colormodeBtn">Color Mode</buton>

`
document.querySelector('header').appendChild(nadvar)




}



export const printLogoutBtn =()=>{
    let container = document.querySelector('#buttonContainer')
        container.innerHTML=`
        <button type = "button" id="logoutBtn">Logout</buton>
        `
}

const clearBtnLogout=()=>{
    document.querySelector('#buttonContainer').innerHTML=``
}

const clearSaludo =()=>{
    let saludo=document.querySelector("#saludo")
    saludo.innerHTML=''
}

export const addEventLogout =()=>{
    let logoutBtn = document.querySelector("#logoutBtn")
    logoutBtn.addEventListener("click",()=>{sessionStorage.clear(), clearBtnLogout(),clearSaludo(),loginExe() })
}

