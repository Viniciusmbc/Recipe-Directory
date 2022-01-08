import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchbarStyle, SearchbarInput, SearchbarForm } from "./SearchbarStyle";

export default function Searchbar(){
    
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/search?q=${term}`)
    }


    return (
        <SearchbarStyle>
            <SearchbarForm onSubmit={handleSubmit}>
                <label htmlFor="searchbar">Busca:</label>
                <SearchbarInput type="text" id="search" onChange={(e) => setTerm(e.target.value)}
                required
                />
            </SearchbarForm>
            </SearchbarStyle>
    )


}