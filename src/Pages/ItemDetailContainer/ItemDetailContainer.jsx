import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import getProductId from "../../utils/getProductId"

import isEmpty from "../../utils/isEmpty"

import ItemDetails from "./ItemDetails/ItemDetails"

import './ItemDetailContainer.css'

import LoadCircle from "../ItemListContainer/CardItemsContainer/LoadCircle/LoadCircle"

import { collection, getDocs } from "firebase/firestore"
import dataBase from "../../Firebase/config"

import { useContext } from "react"
import Context from "../../Components/Context/Context"

import Swal from "sweetalert2"


export default function ItemDetailContainer(){

    const {dispatch, myCart}=useContext(Context)


    const {id}=useParams()
    
    const[productDisplay, setProducts]=useState([])

    const productsCollection=collection(dataBase, "/products")

    useEffect(()=>{
        getDocs(productsCollection).then((snapshot=>setProducts(snapshot.docs.map((docs)=>({id:docs.id, ...docs.data()})))))
    },[])
    
    //contar la cantidad de stock
    const checkStock=(stock)=>{
        const stockCounter=[]
        for(let i=0; i<=stock ; i++){
            stockCounter.push(i)
       }
      return(stockCounter)
    }


    //permite añadir al carro los items    
    const AddItemToCart=()=>{
    
        let optionSelect= document.querySelector(".selectStockItemDetail")
        let selectOption=optionSelect.options[optionSelect.selectedIndex].value
        
   
        productDisplay.map((productDef)=>{
            const product=getProductId(productDef, id)


            if(product!==undefined){
                
                dispatch({
                    type:"addItemCart",
                    payload:{
                        productName:product.name,
                        productId:product.id,
                        productStock:product.stock,
                        productPrice:product.price,
                        productImage:product.image,
                        productSale:product.category.sale,
                        productShopping:product.freeShopping,
                        stockChoiceUser: parseInt(selectOption),
                        
                    }
                })

            }

            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: `Your item has added id:${id}`
              })
        })
    
      
       
    }

    return(
    <div className="bodyItemDetail">

        { isEmpty(productDisplay) ? (
            
            <LoadCircle/>
            
        ):(
            productDisplay.map((productDef)=>{

                const product=getProductId(productDef, id)

                if(product!==undefined){

                    return(
                        
                        <ItemDetails id={product.id}>
                            <img className="imageDetailItem" src={product.image} alt="" />

                            <div className="containerDetailsTextItem">
                                <h3 className="titleDetailItem">{product.name}</h3>
                                
                                <div className="containerDetailsPrice">
                                    <span className="priceItem">${product.price}</span>
                                    {
                                        product.freeShopping==true&&<img src="https://cdn-icons-png.flaticon.com/512/6831/6831000.png" className="iconFreeShoppingItemDetail" alt="" />
                                    }
                                </div>
                                
                                <div className="containerMoreDataItem">
                                    <span>{product.presentationText}</span>
                                </div>

                                <div className="containerStock">
                                    <span>Stock:</span>

                                    <select name="" id="" className="selectStockItemDetail">
                                        {checkStock(product.stock).map(stockNumber=>{
                                            if(stockNumber!==0){
                                                return(
                                                    <option>{stockNumber}</option>
                                                )
                                            }
                                            
                                        })}
                                    </select>
                                    
                                </div>
                                
                                <button className="buttonItem" onClick={AddItemToCart} >Buy Now</button>
                            </div>
                        </ItemDetails>)
                }
                   
            })
        )
         
        }
    </div>
   )
}