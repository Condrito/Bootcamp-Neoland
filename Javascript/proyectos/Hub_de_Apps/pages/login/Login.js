import "./login.css";
import { init } from "../../main"
import { activeLogoutBtn } from "../../utiles/utiles";


export const loginExe = () => {
  document.querySelector("#app").innerHTML = `
  <div id="login">
     <h1 id="h1Login">Neoland</h1>
    <h2 id="h2Login">Hub-Games</h2>
     <h3 id="h3Login">Introduce tu Nombre</h3>
    <input type="text" id="inputLogin" 
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
  //loginButton.addEventListener("click", ()=>{StorageUser(loginInput.value) } 
  const validateForm = () => {
    const regex = /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-1]{2,10}$/;
    if (!regex.test(loginInput.value)) {
      alert("Por favor, introduzca un nombre de usuario válido (entre 2 y 10 caracteres)");
      return false;
    }
    return true;
  };
  
  loginButton.addEventListener("click", () => {
    if (validateForm()) {
      // código para enviar el formulario
      loginButton.addEventListener("click", ()=>{StorageUser(loginInput.value) } )
    }
    });
  
   
  
};



//const inputLogin = document.querySelector("#inputLogin");
//const loginBtn = document.querySelector("#loginBtn");





 

