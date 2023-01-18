import { products_list } from "../utils/Catalogue"

export default function CallCatalogue(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products_list)
        }, 800)
    })
} 