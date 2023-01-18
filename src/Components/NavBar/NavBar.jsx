import './NavBar.css'
import NavSearchContainer from './NavLinks&Search/NavLinkSearchContainer'
import IconLogo from './Icon/Icon'
import CartWidget from './CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar=()=>{
    return(
        <header className="containerHeader">
            <NavLink className="NavLinkIcon" to={`/`}><IconLogo></IconLogo></NavLink>
            <NavSearchContainer></NavSearchContainer>
            <CartWidget></CartWidget>
        </header>
    )
}
export default NavBar