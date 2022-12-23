import "./login.css";
import { init } from "../../main"
import { activeLogoutBtn } from "../../utiles/utiles";


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
    document.querySelector('#logoutBtn').style.display='none'
    
};


const StorageUser=(username)=>{
 const loginInput= document.querySelector('#inputLogin')
  localStorage.setItem("user",username);
 document.querySelector("#saludo").innerHTML=`Hola ${loginInput.value}`;
 activeLogoutBtn()
 
 init("dashboard")
}

 const addEventLogin = () => {
  const loginButton = document.querySelector("#loginBtn");
  const loginInput= document.querySelector('#inputLogin');
  loginButton.addEventListener("click", ()=>{StorageUser(loginInput.value) } 
  
 
  );
};




 

