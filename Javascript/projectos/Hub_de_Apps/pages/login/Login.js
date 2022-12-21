import "./login.css";
import { printLogoutBtn } from "../componentes/navbar/Navbar";
import { addEventLogout } from "../componentes/navbar/Navbar";
import { createDashboard } from "../dashboard/Dashboard";


export const loginExe = () => {
  document.querySelector("#app").innerHTML = `
  <div id="login">
     <h1 id="h1Login">Neoland</h1>
    <h2 id="h2Login">Hub-Games</h2>
     <h3 id="h3Login">Introduce tu Nombre</h3>
    <input type="text" id="inputLogin" size="tamaño"
    name="nombre" placeHolder="Username"/>
    <button type= "button" id="loginBtn">Login</button>
  </div>
    `;
    addEventLogin()
    
};



const StorageUser=(username)=>{
 const loginInput= document.querySelector('#inputLogin')
  sessionStorage.setItem("user",username);
 document.querySelector("#saludo").innerHTML=`Hola ${loginInput.value}`;
  

}

 const addEventLogin = () => {
  const loginButton = document.querySelector("#loginBtn");
  const loginInput= document.querySelector('#inputLogin')
  loginButton.addEventListener("click", ()=>{StorageUser(loginInput.value), printLogoutBtn(),addEventLogout(),createDashboard()  } 
 
  );
};




 

