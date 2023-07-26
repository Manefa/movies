import React from "react";
import Affiche from "./Affiche";
import FilmCard from "./FilmCard";
import { useState, useEffect } from "react";

function Main() {
  const style = {
    width: "35px",
    height: "20px",
    borderRadius: "10px",
    backgroundColor: "red",
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=8b5602dda06f835db84e3d822e188160"
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  console.log(items);

  return (
    <div
      className="container-fluid"
      Style={{ backgroundColor: "#090a0e", color: "" }}
    >
      <Affiche obj={items.results && items.results[0]}></Affiche>
      <div className="row">
        <div className="d-flex col-md-3 col-sm-3 col-xs-3 justify-content-between align-items-center mt-3 ms-3">
          <h5 className="fw-bold">Films En tendance aujourd'hui</h5>
          <div className="col-md-3 col-xl-3 col-sm-3" style={style}></div>
        </div>
      </div>
      <div className="row g-0">
        {items.results &&
          items.results.map((item) => <FilmCard obj={item}></FilmCard>)}
      </div>
      <div className="row my-5">
               {" "}
        <div className="offset-2 col-md-8 card my-5 text-center bg-dark text-danger">
                   {" "}
          <h1 className="mt-5">inscription aux nouvelles de notre site</h1>     
           {" "}
          <form
            action="../script/action_script.php"
            method="post"
            className="fs-5 p-5"
          >
                     {" "}
            <div>
                         {" "}
              <label for="prenom" className="pb-2 fw-bold">
                prenom
              </label>
                          <br />           {" "}
              <input
                type="text"
                id="prenom"
                name="prenom"
                placeholder="David"
              ></input>
                          <br />           {" "}
              <label for="nom" className="pt-2 pb-2 fw-bold">
                nom
              </label>
                          <br />           {" "}
              <input
                type="text"
                id="nom"
                name="nom"
                placeholder="Brown"
              ></input>
                       {" "}
            </div>
                     {" "}
            <div>
                         {" "}
              <label for="email" className=" pt-5 pb-2 fw-bold">
                Enter your email:
              </label>
                          <br />           {" "}
              <input type="email" id="email" name="email"></input>             
                     {" "}
            </div>
                     {" "}
            <input className="mt-5" type="submit" value="Submit"></input>       {" "}
          </form>
                 {" "}
        </div>
             {" "}
      </div>
    </div>
  );
}

export default Main;
