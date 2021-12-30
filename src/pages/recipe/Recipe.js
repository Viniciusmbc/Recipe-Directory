import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import { RecipeMethod, RecipeStyled, RecipeStyledLi, RecipeStyledUl } from './RecipeStyled';

export default function Recipe() {
    
    const {id} = useParams();
    const url = 'http://localhost:3000/recipes/' + id;
    const {data: recipes, isPending, error} = useFetch(url) 
    


    return (
        <RecipeStyled>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {recipes && (
            <>
                <h2>{recipes.title}</h2>
                <p>Demora {recipes.cookingTime} para ficar pronto</p>
                <RecipeStyledUl>
                
                    {recipes.ingredients.map(ing => 
                <RecipeStyledLi key={ing}>
                    {ing}
                </RecipeStyledLi>)}
                
                </RecipeStyledUl>
                <RecipeMethod>{recipes.method}</RecipeMethod>
            </>
        )}    
        </RecipeStyled>
    )

}
