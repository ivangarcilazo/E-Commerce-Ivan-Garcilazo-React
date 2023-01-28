import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import Card from "./Card/Card"
import './CardItemsContainer.css'

import WomenPage from "../../Category/Women/Women-"
import ManPage from "../../Category/Man/Man"
import SalePage from "../../Category/Sale/Sale"

import isEmpty from "../../../utils/isEmpty"

import LoadCircle from "./LoadCircle/LoadCircle"

import dataBase from "../../../Firebase/config"
import {collection, getDocs } from "firebase/firestore"

import checkStock from "../../../utils/checkStock"


export default function CardItemsContainer(){
    
    const{id}=useParams() 

    const[products, setProducts]=useState([])
    const productsCollection=collection(dataBase, "/products")

    const[IdStockNumber, setIdStockNumber]=useState({})
    const usersOrdersCollection=collection(dataBase, '/ordersByCustomer')

    useEffect(()=>{
        getDocs(productsCollection).then((snapshot=>setProducts(snapshot.docs.map((docs)=>({id:docs.id, ...docs.data()})))))

        getDocs(usersOrdersCollection).then((snapshot)=>setIdStockNumber(snapshot.docs.map((docs)=>(docs.data().cartProducts.map((payload)=>({stockSelectByUser:payload.payload.stockChoiceUser, idProductUser:payload.payload.productId } ))))))
    },[])
   
    !isEmpty(products)&&checkStock(products, IdStockNumber)
    
    
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
                        {products.map((product)=>{
                            if(product.category.woman==true){
                                return(
                                    <div key={product.id}>
                                        <Card product={product}/>    
                                    </div>
                                   )
                            }
                            
                        })}
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
                        {products.map((product)=>{
                            if(product.category.man==true){
                                return(
                                    <div key={product.id}>
                                        <Card product={product}/>
                                    </div>
                                   )
                            }
                            
                        })}
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
                        {products.map((product)=>{
                            if(product.category.sale==true){
                                return(
                                    <div key={product.id}>
                                        <Card product={product}/>
                                    </div>
                                   )
                            }
                            
                        })}
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
                        return(
                            <div key={product.id}>
                                <Card product={product}/>
                            </div>
                        )
                    })}  
                </div>
                
                )}
    
            </div>
        )
        break;
    
    }

    
}