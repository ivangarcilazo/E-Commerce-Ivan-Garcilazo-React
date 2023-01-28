import "./Cart.css"

import { useContext } from "react"
import Context from "../../Components/Context/Context"
import { useRef } from "react"
import { NavLink } from "react-router-dom"

import ItemCart from "./ItemCartContainer/ItemCartContainer"
import TicketPurchase from "./TicketPurchase/TicketPurchase"

import {addDoc, collection} from "firebase/firestore"
import dataBase from "../../Firebase/config"
import { useState } from "react"


export default function CartContainer(){

    const {dispatch, myCart}=useContext(Context)
    
    const [buyedIt, setBuyedIt]=useState('buyedItOff')

    const[idTicket, setIdTicket]=useState("")

    const [error,setError]=useState("")
    const textName=useRef(undefined)
    const textEmail=useRef(undefined)
    const textAdress=useRef(undefined)

    const onPurchaseItemHandler=(amountFinal)=>{

        const nameUser=textName.current.value
        const emailUser=textEmail.current.value
        const adressUser=textAdress.current.value

        if(!nameUser){
            return setError('A valid name is required.')
        }
        if(!emailUser){
                return setError('A email valid is required.')
        }
        if(!emailUser.includes('@')){
            return setError('@ is required.')
        }
        if(!adressUser){
            return setError('A valid adress is required.')
        }else{
            setError('')
            }
        
        const totalAmount=amountFinal

        console.log(totalAmount)

        const customer={
            dataCustomer:{
                nameCustomer:nameUser,
                emailCustomer:emailUser,
                adressCustomer:adressUser,
                totalAmount:totalAmount
            }
        }
        const loadStock={
            loadStock:false
        }
        addPurchaseUsertoDB(customer, loadStock)
        
        const btnPurchase= document.querySelector("#buttonEnableCart")
                btnPurchase.setAttribute('disabled','')
                btnPurchase.classList="purchaseCartButtonOff"

        setBuyedIt('buyedItOn')

        setTimeout(()=>{
            setBuyedIt('buyedItOff')
        },5000)

        setTimeout(()=>{
            window.location.href="/"
        },5500)

    }   

    const addPurchaseUsertoDB=(buyer, loadStock)=>{
        let userOrder=myCart
            
        userOrder=Object.assign(userOrder, buyer)
        userOrder=Object.assign(userOrder, loadStock)
        const collectionReference=collection(dataBase, 'ordersByCustomer')

        addDoc(collectionReference,userOrder ).then((data)=>{
            setIdTicket(data.id)
        })
    }  

    const getAmountFinal=(element)=>{
        const priceProducts=[]
        for(const product of element){
            priceProducts.push(product.payload.productPrice*product.payload.stockChoiceUser)
        }
        
        const amountFinal = priceProducts.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
        );

            
        return amountFinal
    }
    
    const removeItemsFormCart=(item)=>{
        dispatch({
            type:'removeItemCart',
            payload:{
                productId:item.productId
            }
        })

        document.querySelector(`[class="${item.productId}"]`).className="visibilityOff"
    }

    return(
        <div className="containerCart">
            <div className="containerDataCart">

                <TicketPurchase buyedIt={buyedIt}>
                    <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" className="imageTicket" alt="" />

                    <div className="containerTextTicket">
                        <h2>Successful purchase!</h2>

                        <div style={{display:'flex'}}>
                            <span>ID ticket {!idTicket?'Loading...':idTicket}</span>
                        </div>
                    </div>
                </TicketPurchase>

                <div className="containerItemsCart">
                    {
                        myCart.cartProducts.length==0?
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <span>There are no items added to the cart yet!</span>
                            <NavLink to='/'>Go Home</NavLink>
                            </div>
                        :
                        (
                            myCart.cartProducts.map((cartItem)=>{
                                const item=cartItem.payload
                                return(
                                    <div className={item.productId}>

                                        <ItemCart key={item.productId}>
                                            <img className="itemImageCart" src={item.productImage} alt="" />
                                            
                                            <div className="containerDataItemCart">

                                                <div className="DataItem">
                                                    <h2 className="titleItemCart">{item.productName}</h2>

                                                    <span className="priceItemCart">${item.productPrice}</span>
                                                    {item.productSale?<span className="saleItemCart">SALE</span>:false}
                                                    
                                                    {item.productShopping?<img src="https://cdn-icons-png.flaticon.com/512/6831/6831000.png" className="imgItemCart" alt="" />:<br></br>}
                                                </div>
                                                <div className="dataItem-stock">
                                                    <span className="amountItemCart">Amount: {item.stockChoiceUser}</span>

                                                    <button className="removeButtomItemCart" onClick={()=>{removeItemsFormCart(item)}}>Remove</button>   
                                                </div>  
                                                </div>


                                        </ItemCart>
                                    </div>
                                    
                                )
                                
                            })
                            
                        )
                    }
                </div>

                <div className="containerDataToPurchase">
                    <form action="" className="formCart">

                        <input type="text" name="" id="textName" ref={textName}  placeholder="Your name here"  className="inputFormCart"/>

                        <input type="email" name="" id="textEmail" ref={textEmail} placeholder="Your email here"  className="inputFormCart"/>

                        <input type="text" name="" id="textAdress" ref={textAdress}  placeholder="Your adress here" className="inputFormCart" />

                        {
                            error&&<span style={{fontWeight:'bolder', color:'red', fontSize:'1.5vw'}}>{error}</span>
                        }

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'3vw'}}>
                            { myCart.cartProducts.length===0?<></>: <span><b>Total:${getAmountFinal(myCart.cartProducts)}</b> </span> }

                            {myCart.cartProducts.length===0?
                            <input type="button"  value="Purchase" onClick={()=>{alert('Add items first!')}} style={{backgroundColor:'gray'}} className="purchaseCartButton" />
                            :
                            <input  type="button" id="buttonEnableCart"  value="Purchase" className="purchaseCartButton" onClick={()=>{onPurchaseItemHandler(getAmountFinal(myCart.cartProducts))}} />}
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}