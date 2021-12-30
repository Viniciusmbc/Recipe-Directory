import styled from "styled-components";

export const RecipeStyled = styled.div`
max-width: 1200px;
margin: 40px 40px;
text-align: center;
background: #fff;
padding: 40px;
box-sizing: border-box;

h2{
  text-align: center;
  margin: 40px auto;
  color: #333;
}

p{
    margin: 40px auto;
}
`

export const RecipeStyledUl = styled.ul`
    display: flex;
    padding: 0;
    justify-content: center;
    margin-top: 0;
`

export const RecipeStyledLi = styled.li`
    list-style-type: none;
    margin-right: 10px;
    color: #777;

    &:after{
        content:",";
    }

    &:last-child {

        &:after{
            content: ".";
        }
    }
`

export const RecipeMethod = styled.p`
    text-align: left;
    line-height: 1.5em;
`

