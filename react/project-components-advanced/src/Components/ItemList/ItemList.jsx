import React from "react";
import "./ItemList.css"
import Image from "../Image/Image";

import SubTitle from "../SubTitle/SubTitle";
import Paragraph from "../Paragraph/Paragraph";

const ItemList = ( { character }) => {
  
  
  const style = character.status === "Alive" ? {display: "block"} : {display: "none"};


  return (
    <li style={style}>  
      <SubTitle text={character.id}/>
      <Paragraph classp= "name" text={character.name}/>
      <Paragraph classp= "origin" text={character.origin.name}/>
      <Image image={character.image} textAlt={character.name} ancho="100%" largo="100%"/>
    </li>
  );
};

export default ItemList;