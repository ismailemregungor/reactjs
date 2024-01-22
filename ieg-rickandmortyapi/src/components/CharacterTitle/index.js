import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import "../../constants/apiUrl";

const CharacterTitle = ({ name, status, species, id }) => {
  const statusType = cn({
    "status-dot": true,
    alive: status === "Alive",
    dead: status === "Dead",
    unknown: status === "Unknown",
  });

  return (
    <span className="character-title">
      <Link
        to={`https://rickandmortyapi.com/api/character/${id}`}
        className="title"
      >
        <p className="title">{name}</p>
      </Link>

      <span className="status-container">
        <span className={statusType}></span>
        <span className="status-text">
          {status} - {species}
        </span>
      </span>
    </span>
  );
};

export default CharacterTitle;
