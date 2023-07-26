import React from "react";
import ProfilePicture from "./PictureProfile";
import { Link } from "react-router-dom";

function Baniere() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center mt-2">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="col-md-1 fs-3 fw-bold text-danger">Metflix</div>
          </Link>
          <Link to="/acteur" style={{ textDecoration: "none", color: "white" }}>
            <div className="col-md-2 fs-6 fw-bold">Acteur</div>
          </Link>
          <Link
            to="/rechercheFilm"
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="col-md-2 fs-6 fw-bold">Recherche</div>
          </Link>
          <div
            className="col-md-2 d-flex justify-content-end align-items-center"
            style={{ display: "inline-block" }}
          >
            <div style={{ display: "inline-block" }} className="ms-3">
              <ProfilePicture obj="https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"></ProfilePicture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baniere;
