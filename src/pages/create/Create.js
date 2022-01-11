import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";
import { CreateStyled } from "./CreateStyled";
import { Ingredients } from "./CreateStyled";

export default function Create() {
    
    const [titulo, setTitulo] = useState('');
    const [modoPreparo, setModoPreparo] = useState('');
    const [tempoPreparo, setTempoPreparo] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredientes, setIngredientes] = useState([]);
    const ingredientInput = useRef(null)
    const navigate = useNavigate();

    
    const handleSubmit = (e) => {
        e.preventDefault();
         const doc = {titulo, ingredientes, modoPreparo, tempoPreparo: tempoPreparo + "minutes"};

         try{
             projectFirestore.collection('recipes').add(doc)
             navigate("/")
         }  catch(err){
             console.log(err)
         }
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const ing =  newIngredient.trim();

        if(ing && !ingredientes.includes(ing)){
            setIngredientes(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient('');
        ingredientInput.current.focus()
    }



    return (
        <CreateStyled>
            <h2>Adicionar uma Nova Receita</h2>
            <form onSubmit={handleSubmit}>

            <label>
                <span>Recipe title:</span>
                <input type="text" onChange={(e) => setTitulo(e.target.value)}
                value={titulo}
                required
                />
            </label>

            <label>
            <span>Recipe ingredients:</span>
            <Ingredients>
                <input type="text"
                onChange = {(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
                />
                <button onClick={handleAdd}>add</button>
            </Ingredients>
            </label>
        <p>Current Ingredients:{ingredientes.map( i => <em key={i}>{i}, </em>)}</p>


            <label>
                <span>Recipe method:</span>
                <textarea onChange={(e) => setModoPreparo(e.target.value)}
                value={modoPreparo}
                required/>
            </label>

        <label>
        <span>Tempo de preparo (em minutos):</span>
        
        <input type="number"
        onChange={(e) => setTempoPreparo(e.target.value)}
        value={tempoPreparo}
        required
        />
        
        </label>

        <button>submit</button>

            </form>
        </CreateStyled>
    )
}
