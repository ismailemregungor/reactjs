import React from "react";
import CharacterTitle from "../CharacterTitle";
import CharacterLocation from "../CharacterLocation";
import CharacterEpisode from "../CharacterEpisode";

const CardContent = ({ character }) => {
  return (
    <span className="card-content">
      <CharacterTitle
        name={character.name}
        status={character.status}
        species={character.species}
        id={character.id}
      />
      <CharacterLocation
        location={character.location}
        locationId={character.locationId}
      />
      <CharacterEpisode
        episode={character.episode}
        episodeId={character.episodeId}
      />
    </span>
  );
};

export default CardContent;
