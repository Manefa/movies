import React from "react";
import { useState, useEffect } from "react";
import Baniere from "./Baniere";
import ActeurCard from "./ActeurCard";

function Acteur() {
  const [isHovering, setIsHovering] = useState(false);

  const [acteurs, setActeurs] = useState([]);

  const style = {
    backgroundColor: "#090a0e",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    margin: "5px",
    padding: "5px",
  };

  const pStyle = {
    maxHeight: "4.5em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": "4",
    "-webkit-box-orient": "vertical",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    transition: "transform 0.2s ease-in-out",
    transform: isHovering ? "scale(1.1)" : "scale(1)",
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/person/popular?api_key=8b5602dda06f835db84e3d822e188160&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        setActeurs(data);
      });
  }, []);

  console.log(acteurs);

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#090a0e", color: "" }}
    >
      <Baniere></Baniere>
      <div className="row">
        {acteurs.results &&
          acteurs.results.map((item) => <ActeurCard obj={item}></ActeurCard>)}
      </div>
    </div>
  );
}

export default Acteur;
