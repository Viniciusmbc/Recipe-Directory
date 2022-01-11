import {useTheme} from '../hooks/useTheme'

// react-router
import { Link } from "react-router-dom"

// styles
import { NavStyle, Styles,StyledLink} from "./Styles/NavBarStyle.js"


// Components:
import Searchbar from "./Searchbar.js"

export default function Navbar() {

    const {color, changeColor} = useTheme()

    return (
       
    <Styles style={{background: color}} >    

        <NavStyle onClick={() => changeColor("pink")}>
            <Link to="/">
            <h1>Cooking Ninja</h1>
            </Link> 
            <Searchbar/>
            <StyledLink to="create"> Create Recipe </StyledLink> 
        </NavStyle>

    </Styles>
            
    )
}
