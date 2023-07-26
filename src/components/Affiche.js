import React from "react";
import "../css_components/img_height.css";
import { useEffect } from "react";

function Affiche(props) {
  useEffect(() => {
    console.log(props.obj);
  }, [props.obj]);

  const containerStyle = {
    backgroundImage: props.obj
      ? "url(" +
        "https://image.tmdb.org/t/p/original" +
        props.obj.poster_path +
        ")"
      : "url(https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/441/the-gray-man-photo-1441466.png)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "10px",
  };

  return (
    <div
      className="container-fluid  bgDC mt-3"
      style={containerStyle}
      id="backgroundImg"
    >
      <div className="row text-center">
        <div className="col-12">
          <h1 className="text-white mb-5" id="titreMV">
            {props.obj ? props.obj.original_title : "The Gray Man"}
          </h1>
          {}
          <div className="container">
            <p className="text-white">
              {props.obj
                ? props.obj.overview
                : "The Gray Man is a 2022 American action thriller film directed by Anthony and Joe Russo, from a screenplay the latter co-wrote with Christopher Markus and Stephen McFeely, based on the 2009 novel of the same name by Mark Greaney."}
            </p>
          </div>

          <div>
            <button type="button" className="btn btn-danger">
              <p className="my-2 mx-1">PARCOURIR</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Affiche;
