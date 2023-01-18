import NavBar from "../NavBar/NavBar"

export default function Layout(props){
    const{ children }=props

    return(
        <div className="layoutContainer">
            <NavBar></NavBar>
            {children}
        </div>      
    )
}