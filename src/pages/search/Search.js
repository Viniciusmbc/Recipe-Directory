import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList';
import { useFetch } from '../../hooks/useFetch';
import { TitleStyled } from './TitleStyled';

export default function Search() {
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('q');

    const url = 'http://localhost:3000/recipes?q=' + query;
    const {error, isPending, data} = useFetch(url);

    return (
        
            <>           
            <TitleStyled> Recipes including "{query}" </TitleStyled>          
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data &&  <RecipeList recipes={data} />}
            </>
             )
}
