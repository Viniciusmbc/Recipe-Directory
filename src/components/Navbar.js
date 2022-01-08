import { Link } from "react-router-dom"
import { NavStyle, Styles,StyledLink} from "./NavBarStyle.js"

// Components:
import Searchbar from "./Searchbar.js"

export default function Navbar() {
    return (
       
<Styles>    

<NavStyle>
        <Link to="/">
            <h1>Cooking Ninja</h1>
        </Link> 
        <Searchbar/>
        <StyledLink to="create"> Create Recipe </StyledLink> 
  </NavStyle>

</Styles>
            
    )
}
