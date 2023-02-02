import './style.css'
import { loginExe } from './pages/login/Login'
import { createNavbar } from './pages/componentes/navbar/Navbar'
import { addEventColor } from './utiles/utiles'
import { createDashboard } from './pages/dashboard/Dashboard'
import { printPokemons } from './pages/pokeapi/Pokeapi'
import { colorBackground } from './utiles/utiles'
createNavbar()

addEventColor()


colorBackground();

export const init=(navigation)=>{
    switch(navigation){
        case undefined:
          localStorage.getItem("user")
                 ? createDashboard()
                 : loginExe();
            break;
        case "dashboard":
            createDashboard();
            break;
        case "pokeApi":
            printPokemons();
            break;
        
    }
};

init(undefined);