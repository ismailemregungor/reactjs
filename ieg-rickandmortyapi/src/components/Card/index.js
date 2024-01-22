import CharacterImage from "../CharacterImage";
import CardContent from "../CardContent";
import React from "react";
import "./index.scss";

const Card = ({ character }) => {
  return (
    <div className="card">
      <CharacterImage imageUrl={character.image} />
      <CardContent character={character} />
    </div>
  );
};

export default Card;
