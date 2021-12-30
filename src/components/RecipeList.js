import { Link } from "react-router-dom";
import { CardStyled, RecipeListStyles, TextoStyled } from "./RecipeListStyle";

export default function RecipeList({recipes}) {
    return (
        <>
             <RecipeListStyles> 
            {recipes.map(recipe => (
               
                       
                
                <CardStyled key={recipe.id}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} para ficar pronto</p>

                <TextoStyled>
                <div> {recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cozinhar isto</Link>

                </TextoStyled>
                </CardStyled>
                
                        
                
            ))}
            </RecipeListStyles>
        </>
    )
}
