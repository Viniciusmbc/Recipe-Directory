import styled from "styled-components";

export const CreateStyled = styled.div`
    color: #555;
    max-width: 600px;
    margin: 60px auto;

    h2{
        text-align: center;
        
    }

label {
    span{
        display: block;
        margin: 30px 0 10px;
    }
}

p{
    margin-top: 10px;
    font-size: 0.8em;
}

button{
    display: block;
    width: 100px;
    font-size: 1em;
    color: #fff;
    padding: 8px 20px;
    border: 0;
    border-radius: 4px;
    background-color: #58249c;
    cursor: pointer;
    text-decoration: none;
    margin: 20px auto;
}

`

export const Ingredients = styled.div`
    display: flex;
    align-items: center;

    button{
        margin: 0 0 0 10px;
        
    }
`
