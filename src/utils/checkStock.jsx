import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import dataBase from "../Firebase/config"

const checkStock=(products, dataOrder)=>{
        const productsSelected=[]
 
        dataOrder.map(data=>data.map((productSelected)=>{
             productsSelected.push(productSelected)
         }))
 
         products.map((product)=>{
                 productsSelected.map((pselect)=>{
                     if(product.id==pselect.idProductUser){
 
                         
                        const itemRef=doc(dataBase,"/products",`/${product.id}`)
                        const loadStockRef=collection(dataBase,"/ordersByCustomer")
     
                         getDocs(loadStockRef).then((snapshot)=>snapshot.docs.map((customer=>{
 
                          const customerRef=doc(dataBase,"/ordersByCustomer",`/${customer.id}`)
                            
                             getDoc(customerRef).then((customer)=>{
 
                                 getDoc(itemRef).then(productStock=>{
                                     
                                     if(productStock.data().stock>1&&(customer.data().loadStock===false)){
                                         
                                     updateDoc(itemRef,{
                                         stock: product.stock-pselect.stockSelectByUser
                                         })
                                     }
                                 })
 
                             })
 
 
                             getDoc(customerRef).then(()=>{
                                 updateDoc(customerRef,{
                                     loadStock:true
                                 })
                             })
 
                         })))  
                     }
                     
 
 
             })
 
         })
}

export default checkStock