import React from "react";
import "./CharacterList.css";
import ItemList from "../ItemList/ItemList";
import { useState } from "react";



 const CharacterList = () => {
  const [characterList, setCharacterList] = React.useState([]);
  const [pages, setPages] = useState(1);

  const nextPage = () => {
    setPages(pages + 1);
  };
  const prevPage = () => {
    setPages(pages - 1);
  };

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/?page=${pages}`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, [pages]);

  


  return (
    <>
    {pages > 1 ? <button className="prev" onClick={() => prevPage()}>-</button> : ""}
    {pages < 42 ? <button className="next" onClick={() => nextPage()}>+</button> : ""}
    <ul>
      {characterList.map((character) => (
        
        <ItemList key={character.id} character={character}/>
      ))}
      </ul>
      </>
    
  );
};

export default CharacterList