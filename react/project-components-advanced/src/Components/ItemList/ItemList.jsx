import React from "react";
import "./ItemList.css"
import Image from "../Image/Image";

import SubTitle from "../SubTitle/SubTitle";
import Paragraph from "../Paragraph/Paragraph";

const ItemList = ( { character }) => {
  
  
  

  return (
    <li >
      
      <SubTitle text={character.name}/>
      <Paragraph text={character.status}/>
      <Image image={character.image} textAlt={character.name} ancho="100px" largo="100px"/>
    </li>
  );
};

export default ItemList;