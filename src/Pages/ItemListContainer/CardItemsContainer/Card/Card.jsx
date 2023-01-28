import './Card.css'

import { NavLink } from 'react-router-dom'
import saleVerification from '../../../../utils/SaleVerification'
import freeShopping from '../../../../utils/freeShoppingVerification'

export default function Card(props){
    const{ product }=props

   

    return(
        <div className="Card">
            <NavLink 
                    to={`/item/${product.id}`}
                    className="NavLinkCard"
                >
                    
                <div className="containerimg">
                    <img src={product.image} className="imageCard" alt="" />
                </div>
                <div className="containerInfoItemList">
                    <span className="titleItem">{product.name}</span>
                    <span className="priceItemCard">${product.price}</span>
                    {saleVerification(product)}
                    {freeShopping(product)}
                </div> 
            </NavLink>

        </div>
    )
    
}