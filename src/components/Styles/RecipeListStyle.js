import styled from "styled-components";

export const RecipeListStyles = styled.div`
    display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 40px;
   text-align: center;
   margin-top: 40px;
   margin-left: 50px;
`

export const CardStyled = styled.div`
        display: ${props => props.display};
        align-items: center;
        background: #fff;
        color: #333;
        padding: 20px;
        border-radius: 4px;
        box-shadow: 3px 3px 3px rgba(0,0,0,0.05);
        transition: all 0.3s ease;
        position: relative;

        &:hover{
            transform: rotate(3deg);
        }

        h3{
            color: #555;
            margin-bottom: 6px;
        }

        p{
            color: #999;
            font-size: 0.9em;

        }

        img {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            filter: invert(60%);
        }
    `

export const TextoStyled = styled.div`
        color: #555;
        font-size: 0.7em;
        margin: 20px 0;
        line-height: 1.5em;

        a{
            color: #555;
            text-decoration: none;
            display: block;
            background: #e2e2e2;
            font-size: 0.9em;
            text-align: center;
            padding: 8px;
            border-radius: 4px;
            margin: 20px auto 0;
        }
`