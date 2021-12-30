
import { useFetch } from "../../hooks/useFetch"
import { HomeStyled } from "./HomeStyled"
import RecipeList from "../../components/RecipeList"

export default function Home() {
    
   const {data, isPending, error} = useFetch('http://localhost:3000/recipes') 
   
    return (
        <HomeStyled>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <RecipeList recipes={data}/>}

        </HomeStyled>
    )
}
