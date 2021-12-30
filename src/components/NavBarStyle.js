import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavStyle = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
`

export const Styles = styled.nav `
background: #58249c;
padding: 20px;
color: #fff;

a {
     color: #fff;
    text-decoration: none;

}
`

export const StyledLink = styled(Link)`
 color: #fff;
 text-decoration: none;
 margin-left: auto;
 padding: 8px;
 border: 1px solid #fff;
 border-radius: 4px; 
 
 &:hover {
     background: #fff;
     color: #333;
 }
 `