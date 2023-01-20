import React from "react";
import "./App.css";
import CharacterList from "./Components/CharacterList/CharacterList";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Paragraph from "./Components/Paragraph/Paragraph";
import Image from "./Components/Image/Image";
import Title from "./Components/Title/Title";

const App = () => {
  const imgCopyright =
    "https://static4.depositphotos.com/1001003/340/i/950/depositphotos_3405857-stock-photo-3d-copyright-symbol.jpg";

  return (
    <>
      <Header>
        <Title text="Rick and Morty" />
      </Header>
      <Main>
        <CharacterList />
      </Main>
      <Footer>
        <Paragraph text="Created by Miguel" />
        <Image
          image={imgCopyright}
          altText="Copyright"
          ancho="15px"
          alto="15px"
        />
        <Paragraph text="Copyright" />
      </Footer>
    </>
  );
};

export default App;
