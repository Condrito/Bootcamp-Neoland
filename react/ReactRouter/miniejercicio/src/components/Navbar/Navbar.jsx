import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar=()=>{
    return(
        <>
        <NavLink to="">Home</NavLink>
        <NavLink to="listado">Listado</NavLink>
        <NavLink to="about">About</NavLink>
        </>
    )
}

export default Navbar