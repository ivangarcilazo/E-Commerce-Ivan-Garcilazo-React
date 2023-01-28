import "./ItemDetails.css"
export default function ItemDetails(props){
    const{children, id}=props

    return(
        <div className="containerItemDetail" key={id}>
            {children}
        </div>
    )
    
}