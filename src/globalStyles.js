
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

*{
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap");
}


html, body, #root {
    height: 100%;
  }
  body {
    font-family: Raleway, sans-serif;
    margin: 0;
    font-size: 1.4em;
    background: #dfdfdf;
    color: #333;
  }
  h1,h2,h3,p {
    margin: 0;
  }
  input, textarea {
    color: #333;
    padding: 8px;
    font-size: 1em;
    border-radius: 4px;
    border: 1px solid #d4d4d4;
    background-color: #fff;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
`;
 
export default GlobalStyle;