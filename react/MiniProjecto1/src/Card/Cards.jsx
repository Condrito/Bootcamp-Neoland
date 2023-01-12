import { useState } from "react";
import React from "react";
import './Cards.css'



const Cards =()=> {
  
  
    const [characters, setCharacters] = useState([]);
    const[pages, setPages]=useState()
  let pagina
    const changePages=()=>{setPages(pagina++)}
   


    React.useEffect(() => {
      
      (async () => {
        
        let data = await fetch(`https://rickandmortyapi.com/api/character/?page=${pages}`).then(
          (res) => res.json()
        );
        
        setCharacters(data.results);
      })();
      
    }, [pages]);

      return (
        <>
        <button onClick={()=>console.log("hola")}>+</button>
          {characters.map((character) => (
            <div className="card" key={character.id}>
                <h2>{character.id}</h2>
              <h3>{character.name}</h3>
              <img className="image" src={character.image} alt={character.name} />
              {character.status === "Alive"? <p className="alive">{character.status}</p> :<p className="noAlive">{character.status}</p>}
              <p>{character.origin.name}</p>
              
       
            </div>
          ))}
        </>
      );
    };
    
      
    export default Cards
    