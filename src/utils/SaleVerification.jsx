export default function saleVerification(product){
    if(product.category.sale===true){
        return(
            <span style={{backgroundColor:'red', width:'5vw', display:'flex', justifyContent:'center', alignItems:'center', color:'white',  borderRadius:'1vw'}}>SALE</span>
        )
    }
}