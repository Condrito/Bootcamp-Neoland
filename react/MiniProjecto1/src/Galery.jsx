import { useState } from "react";
import Cards from "./Card/Cards";

const Galery = ({ children }) => {
  const [pages, setPages] = useState(1);

  const nextPage = () => {
    setPages(pages + 1);
  };
  const prevPage = () => {
    setPages(pages - 1);
  };

  return (
    <>
      <div className="containerBtn">
      {pages > 1 ? <button className="prev" onClick={() => prevPage()}>-</button> : ""}
      <img className="rickAndMorty" src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="Rick and Morty" />
      
        {pages < 42 ? <button className="next" onClick={() => nextPage()}>+</button> : ""}
        
      </div>
      <div className="galery">
        {" "}
        {children}
        <Cards pag={pages} />
      </div>
    </>
  );
};

export default Galery;
