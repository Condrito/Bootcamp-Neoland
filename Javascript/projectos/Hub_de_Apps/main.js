import './style.css'
import { loginExe } from './pages/login/Login'
import { createNavbar } from './pages/componentes/navbar/Navbar'
import { addEventColor } from './utiles/utiles'
import { createDashboard } from './pages/dashboard/Dashboard'


createNavbar()

addEventColor()




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
        
    }
};

init(undefined);