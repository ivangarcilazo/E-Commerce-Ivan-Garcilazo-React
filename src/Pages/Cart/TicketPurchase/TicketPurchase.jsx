export default function TicketPurchase(props){
    const {buyedIt, children}=props
    return(
        <div className={buyedIt}>
            {children}
        </div>
    )
}