import React, { useState, useEffect } from "react";
import { getEpisode } from "../../services/character";
import { Link } from "react-router-dom";

const CharacterEpisode = ({ episode, episodeId }) => {
  const [episodeName, setEpisodeName] = useState([]);

  useEffect(() => {
    getEpisode(episode[0]).then((data) => {
      setEpisodeName(data.name);
    });
  }, []);

  return (
    <span className="character-episode">
      <p className="episode-label">First seen in:</p>
      <Link
        to={`https://rickandmortyapi.com/api/episode/${episodeId}`}
        className="episode"
      >
        <a className="episode">{episodeName}</a>
      </Link>
    </span>
  );
};

export default CharacterEpisode;
