import "./ItemCart.css"

export default function ItemCart(props){
    const {children}=props
    return(
        <div className="ItemCart">
            {children}
        </div>
    )
}