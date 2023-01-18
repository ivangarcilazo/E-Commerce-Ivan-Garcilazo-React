import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

import getProductId from "../../utils/getProductId"

import CallCatalogue from "../../Service/ApiCatalogue"
import isEmpty from "../../utils/isEmpty"

import ItemDetails from "./ItemDetails/ItemDetails"

import './ItemDetailContainer.css'

import LoadCircle from "../ItemListContainer/CardItemsContainer/LoadCircle/LoadCircle"

export default function ItemDetailContainer(){
    const {id}=useParams()
    
    const[productDisplay, setProducts]=useState([])

    useEffect(()=>{
        CallCatalogue().then((productList)=>setProducts(productList))
    })

   return(
    <div className="bodyItemDetail">

        { isEmpty(productDisplay) ? (
            
            <LoadCircle/>
            
        ):(
            productDisplay.map((productDef)=>{

                const product=getProductId(productDef, id)

                if(product!==undefined){

                    return(
                    <ItemDetails className="" key={product.id}>
                        <img className="imageDetailItem" src={product.image} alt="" />

                        <div className="containerDetailsTextItem">
                            <h3 className="titleDetailItem">{product.name}</h3>
                            
                            <div className="containerDetailsPrice">
                                <span className="priceItem">${product.price}</span>
                                <span className="shopItem">Free Shopping!</span>
                            </div>
                            
                            <div className="containerMoreDataItem">
                                <span>{product.presentationText}</span>
                            </div>
                            
                            <button className="buttonItem">Buy Now</button>
                        </div>
                    </ItemDetails>)
                }
                   
            })
        )
         
        }
    </div>
   )
}