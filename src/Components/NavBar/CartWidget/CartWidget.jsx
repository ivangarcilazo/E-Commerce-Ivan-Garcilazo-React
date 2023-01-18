import CartIcon from './Icon/IconCart'
import './CartWidget.css'

import { NavLink } from 'react-router-dom'

const CartWidget=()=>{
    return(
        
    
            <NavLink to={`cart`}>
                <div className="containerCartWidget">
                    <CartIcon >
            
                    </CartIcon> 
                </div>
            </NavLink>

       
    )
}
export default CartWidget