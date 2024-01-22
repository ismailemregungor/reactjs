import React from "react";
import { Link } from "react-router-dom";

const CharacterLocation = ({ location, locationId }) => {
  return (
    <span className="character-location">
      <p className="location-label">Last known location:</p>
      <Link
        to={`https://rickandmortyapi.com/api/location/${locationId}`}
        className="location"
      >
        <a className="location">{location.name}</a>
      </Link>
    </span>
  );
};

export default CharacterLocation;
