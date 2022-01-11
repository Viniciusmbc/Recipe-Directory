import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { RecipeMethod, RecipeStyled, RecipeStyledLi, RecipeStyledUl } from './RecipeStyled';
import { projectFirestore } from '../../firebase/config';

export default function Recipe() {
    
    const {id} = useParams();

    const [recipe, setRecipe] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);    
    
    useEffect(() => {
        setIsPending(true)

      const unsub =  projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
            if(doc.exists){
                setIsPending(false);
                setRecipe(doc.data())
            } else {
                setIsPending(false);
                setError('Could not find that recipe')
            }
        })

        return () => unsub()
    },[id])


    const handleCLick = () => {
        projectFirestore.collection('recipes').doc(id).update({
            titulo: "Something completely different"
        })
    }

    return (
        <RecipeStyled>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {recipe && (
            <>
                <h2>{recipe.titulo}</h2>
                <p>Demora {recipe.tempoPreparo} para ficar pronto</p>
                <RecipeStyledUl>
                
                    {recipe.ingredientes.map(ing => 
                <RecipeStyledLi key={ing}>
                    {ing}
                </RecipeStyledLi>)}
                
                </RecipeStyledUl>
                <RecipeMethod>{recipe.modoPreparo}</RecipeMethod>
                <button onClick={handleCLick}>Update Now</button>
            </>
        )}    
       
        </RecipeStyled>
    )

}
