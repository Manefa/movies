import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function FilmCard(props) {
  const [isHovering, setIsHovering] = useState(false);

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

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <Link
        to={`/detailFilm/${props.obj.id}`}
        style={{ color: "black", textDecoration: "none" }}
        state={{ obj: props.obj }}
      >
        <div
          style={style}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={"https://image.tmdb.org/t/p/w500" + props.obj.poster_path}
            className="card-img-top"
            alt="placeholder"
            style={imageStyle}
          />
          <div className="card-body">
            <h5 className="card-title mt-4" style={{ color: "white" }}>
              {props.obj.original_title
                ? props.obj.original_title
                : props.obj.original_name}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FilmCard;
