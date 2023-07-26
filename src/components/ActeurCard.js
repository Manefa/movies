import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ActeurCard(props) {
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
    <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
      <Link
        to="/detailActeur"
        state={{ acteur: props.obj }}
        style={{ textDecoration: "none" }}
      >
        <div className="">
          <div style={{ color: "black", textDecoration: "none" }}>
            <div
              style={style}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img
                src={"https://image.tmdb.org/t/p/w500" + props.obj.profile_path}
                className="card-img-top"
                alt="placeholder"
                style={imageStyle}
              />
              <div className="card-body">
                <h5 className="card-title mt-4" style={{ color: "white" }}>
                  <p style={pStyle}>{props.obj.name}</p>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ActeurCard;
