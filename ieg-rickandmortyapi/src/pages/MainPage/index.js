import React, { useState, useEffect } from "react";
import { getCharacters } from "../../services/character";
import MainLayout from "../../layouts/MainLayout";
import "./index.scss";

const MainPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const characterData = await getCharacters();
      setCharacters(characterData.results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const characterData = await getCharacters();
      const charactersWithIds = characterData.results.map((character) => {
        const locationUrlParts = character.location.url.split("/");
        const locationId = locationUrlParts[locationUrlParts.length - 1];

        const episodeUrls = character.episode;
        const episodeId = episodeUrls[0].split("/").pop();

        return {
          ...character,
          locationId,
          episodeId,
        };
      });

      setCharacters(charactersWithIds);
    };

    fetchData();
  }, []);

  return <MainLayout characters={characters} />;
};

export default MainPage;
