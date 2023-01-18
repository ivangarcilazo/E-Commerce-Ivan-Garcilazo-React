import "./ItemDetails.css"
export default function ItemDetails(props){
    const{children}=props

    return(
        <div className="containerItemDetail">
            {children}
        </div>
    )
    
}