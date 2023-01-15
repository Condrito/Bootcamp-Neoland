import { useState } from "react";
import React from "react";
import './Cards.css'



const Cards =({pag})=> {
  
  
    const [characters, setCharacters] = useState([]);

    React.useEffect(() => {
      
      (async () => {
      
        let data = await fetch(`https://rickandmortyapi.com/api/character/?page=${pag}`).then(
          (res) => res.json()
        );
        
        setCharacters(data.results);
      })();
      
    }, [pag]);

      return (
        <>
          {characters.map((character) => (
            <div className="borderAnimation" key={character.id}>
            <div className="card" >

                <h2>{character.id}</h2>
              <h3>{character.name}</h3>
              <img className="image" src={character.image} alt={character.name} />
              {character.status == "Alive"?
                   "" 
                   : character.status == "Dead"? 
                          <p className="dead">{character.status}</p>
                          :<p className="unknown">?</p>}
              
              <p className="origin">{character.origin.name}</p>
              
       
            </div>
            </div>
          ))}
          
        </>
      );
    };
    
      
    export default Cards
    