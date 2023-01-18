import SearchBar from "./Search/Search"
import NavLinks from "./NavLinks/NavLinks"
import './NavLinkSearchContainer.css'
const NavSearchContainer=()=>{
    return(
        <div className="containerSearch-Links">
            <SearchBar></SearchBar>
            <NavLinks></NavLinks>
        </div>
    )
}
export default NavSearchContainer