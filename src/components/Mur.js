import Baniere from "./Baniere";
import React from "react";
import Main from "./Main";

function Mur() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#090a0e", color: "" }}
    >
      <Baniere></Baniere>
      <Main></Main>
    </div>
  );
}

export default Mur;
