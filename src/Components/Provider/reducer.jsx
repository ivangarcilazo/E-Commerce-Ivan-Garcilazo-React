
export default function reducer(store, action){
    const {type, payload}=action

    switch(type){
        case("addItemCart"):
            const cartProducts=store.cartProducts

            if(cartProducts.length===0){
                const orderUser={
                payload:{
                    productId:"x"}
                }
                cartProducts.push(orderUser)
            }
            
            const orderUser={payload}

            if(cartProducts[cartProducts.length-1].payload.productId!==orderUser.payload.productId){
                cartProducts.push(orderUser)
            }
            
            if(cartProducts[0].payload.productId==='x'){
                cartProducts.shift()
            }
            
            return {cartProducts}

        case('removeItemCart'):
            const cartForRemove=store.cartProducts
             cartForRemove.find(product=>{if(product.payload.productId===payload.productId){
                let index=cartForRemove.map(payload=>payload.payload.productId).indexOf(payload.productId)
                cartForRemove.splice(index, 1)
                return cartForRemove
             }})
             
        default:
        return store;

        }


}
