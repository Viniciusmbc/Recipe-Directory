import { projectFirestore } from '../../firebase/config'
import { useEffect, useState } from 'react'


// styles
import { HomeStyled } from "./HomeStyled"

// components
import RecipeList from "../../components/RecipeList"


export default function Home() {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        setIsPending(true)

        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            if (snapshot.empty){
                setError('No recipes to load')
                setIsPending(false)
            } else {
                let results = [];
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                    console.log(results)
                })
                setData(results)
                setIsPending(false)
            }
        })

        return () => unsub()
        
    }, [])

    return (
        <HomeStyled>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </HomeStyled>
    )
}
