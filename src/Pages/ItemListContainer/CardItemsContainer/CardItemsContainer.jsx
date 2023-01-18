import { useEffect, useState } from "react"

import { NavLink, useParams } from "react-router-dom"

import CallCatalogue from "../../../Service/ApiCatalogue"
import Card from "./Card/Card"
import './CardItemsContainer.css'

import WomenPage from "../../Category/Women/Women-"
import ManPage from "../../Category/Man/Man"
import SalePage from "../../Category/Sale/Sale"

import saleVerification from "../../../utils/SaleVerification"
import isEmpty from "../../../utils/isEmpty"

import LoadCircle from "./LoadCircle/LoadCircle"

import dataBase from "../../../Firebase/config"
import { collection, getDocs } from "firebase/firestore"

export default function CardItemsContainer(){
    
    const{id}=useParams() 
    console.log(id)
    const[products, setProducts]=useState([])


    const productsCollection=collection(dataBase, "/products")
    
    useEffect(()=>{
        getDocs(productsCollection).then((snapshot=>setProducts(snapshot.docs.map((docs)=>({id:docs.id, ...docs.data()})))))
    },[])
    // products.map((a)=>console.log(a.id))
    switch(id){

        case('women'):
            return(
            <WomenPage>
                <div className="CardItemsContainer">
                    {isEmpty(products)?(
                        <LoadCircle/>
                    )
                    :
                    (
                    <div className="ListItems">
                        {
                            products.forEach((product)=>{
                            if(product.category.women==true){
                                return(
                                    <Card key={product.id}>
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
                                        </div>
                                        </NavLink>
                                    </Card>
                                )
                            }
                                
            
                            })

                        }
                    </div>
                    
                    )}
    
                </div>
            </WomenPage>
            )
            break;
        case('man'):
            return(
                <ManPage>
                     <div className="CardItemsContainer">
                    {isEmpty(products)?(
                        <LoadCircle/>
                    )
                    :
                    (
                    <div className="ListItems">
                        {
                            products.forEach((product)=>{
                            if(product.category.man==true){
                                return(
                                    <Card key={product.id}>
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
                                        </div>
                                        </NavLink>
                                    </Card>
                                )
                            }
                                
            
                            })

                        }
                    </div>
                    
                    )}
    
                </div>
                </ManPage>
            )
            break;
        case('sale'):
            return(
                <SalePage>
                    <div className="CardItemsContainer">
                    {isEmpty(products)?(
                         <LoadCircle/>
                    )
                    :
                    (
                    <div className="ListItems">
                        {
                            products.forEach((product)=>{
                            if(product.category.sale==true){
                                return(
                                    <Card key={product.id}>
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
                                        </div>
                                        </NavLink>
                                    </Card>
                                )
                            }
                                
            
                            })

                        }
                    </div>
                    
                    )}
    
                </div>
                </SalePage>
            )
                        
        default:
        return(
            <div className="CardItemsContainer">
                {isEmpty(products)?(
                    <LoadCircle/>
                )
                :
                (
                <div className="ListItems">
                    {products.map((product)=>{
                
                    //      <Card>
                    //      <NavLink 
                    //          to={`/item/${product.id}`}
                    //          className="NavLinkCard"
                    //      >
                    //         <span>{product.name}</span>
                   
                    //       {/* <div className="containerimg">
                    //          <img src={product.image} className="imageCard" alt="" />
                    //      </div>
                    //      <div className="containerInfoItemList">
                    //          <span className="titleItem">{product.name}</span>
                    //          <span className="priceItemCard">${product.price}</span>
                    //          {saleVerification(product)}
                    //      </div>  */}
                    //      </NavLink>
                    //   </Card>

                    })}
                           
                </div>
                
                )}
    
            </div>
        )
        break;
    
    }

    
}