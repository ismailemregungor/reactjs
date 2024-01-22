import React from "react";
import Card from "../../components/Card";
import "./index.scss";

const MainLayout = ({ characters }) => {
  return (
    <div className="main-layout">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default MainLayout;
