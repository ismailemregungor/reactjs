import React from "react";

const CharacterImage = ({ imageUrl }) => {
  return (
    <div className="character-image">
      <img src={imageUrl} alt="Character" />
    </div>
  );
};

export default CharacterImage;
