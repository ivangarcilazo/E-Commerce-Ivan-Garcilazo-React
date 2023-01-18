import './NavLinks.css'
import { NavLink } from 'react-router-dom'
const NavLinks=()=>{


    return(
        <div className="containerLinks">
            <ul>
                <li><NavLink to={`/category/women`}>Women</NavLink></li>
                <li><NavLink to={`/category/man`}>Man</NavLink></li>
                <li><NavLink to={`/category/sale`}>Sale</NavLink></li>     
            </ul>
        </div>
    )
}
export default NavLinks