import { Link } from "react-router-dom";

// Styles
import { TitleStyled } from "../pages/search/TitleStyled";
import { CardStyled, RecipeListStyles, TextoStyled } from "./Styles/RecipeListStyle";

// Icons
import Trashcan from "../assets/trashcan.svg"
import { projectFirestore } from "../firebase/config";


export default function RecipeList({recipes}) {
    
    if(recipes.length === 0){
        return <TitleStyled corTexto="red" tamanhoFonte="20px">No recipes to load...</TitleStyled>
    }

    const handleClick = (id) => {
        projectFirestore.collection('recipes').doc(id).delete()
    }
    
    return (
        <>
             <RecipeListStyles> 
            {recipes.map(recipe => (            
                
                <CardStyled key={recipe.id}>
                <h3>{recipe.titulo}</h3>
                <p>{recipe.cookingTime} para ficar pronto</p>

                <TextoStyled>
                <div> {recipe.modoPreparo.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cozinhar isto</Link>

                </TextoStyled>
                
                <img
                className="delete"
                src={Trashcan}
                onClick={() => handleClick(recipe.id)}
                alt="lata de lixo"
                />

                </CardStyled>
                
                        
                
            ))}
            </RecipeListStyles>
        </>
    )
}
