import Baniere from "./Baniere";
import React from "react";
import { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

function Recherche() {
  const [items, setItems] = useState([]);
  const [filmkey, setFilmKey] = useState("");

  const searchMoviesAll = async () => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=8b5602dda06f835db84e3d822e188160"
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  };

  useEffect(() => {
    searchMoviesAll();
  }, []);

  console.log(items);

  const handleChnage = (event) => {
    setFilmKey(event.target.value);
  };

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#090a0e", color: "" }}
    >
      <Baniere></Baniere>
      <form className="d-flex justify-content-center">
        <input type="text" value={filmkey} onChange={handleChnage}></input>
        <button type="submit">Rechercher !</button>
      </form>
      <p>{filmkey}</p>
      <div className="row g-0 mt-5">
        {items.results &&
          items.results.map(
            (item, index) =>
              item.original_title &&
              item.original_title.includes(filmkey) && (
                <FilmCard obj={item}></FilmCard>
              )
          )}
      </div>
    </div>
  );
}

export default Recherche;
