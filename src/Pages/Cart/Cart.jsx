import "./Cart.css"

import { useContext } from "react"
import Context from "../../Components/Context/Context"


export default function CartContainer(){
    
    const {myCart}=useContext(Context)


    return(
        <div className="containerCart">
            <div className="containerDataCart">
                <div className="containerItemsCart">
                    {
                        myCart.Cart.length==0?<span>There are no items added to the cart yet!</span>: <span>CartItem</span>
                    }
                </div>
                <div className="containerDataToPurchase">
                    <form action="" className="formCart">

                        <input type="text" name="" id="textName" placeholder="Your name here"  className="inputFormCart"/>

                        <input type="email" name="" id="textEmail"  className="inputFormCart"/>

                        <input type="text" name="" id="textDirection" className="inputFormCart" />

                        <input type="button" value="Purchase" className="purchaseCartButton" />
                    </form>
                </div>
            </div>
        </div>
    )
}