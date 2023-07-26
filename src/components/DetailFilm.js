import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Baniere from "./Baniere";

function DetailFilm() {
  const location = useLocation();
  const films = location.state.obj;

  const [items, setItems] = useState([]);
  const [casts, setCast] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        films.id +
        "?api_key=8b5602dda06f835db84e3d822e188160&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/" +
        films.id +
        "/credits?api_key=8b5602dda06f835db84e3d822e188160&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setCast(data);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/" +
        films.id +
        "/videos?api_key=8b5602dda06f835db84e3d822e188160&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(data);
      });
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${items.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: "10px",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    color: "#fff",
  };

  const posterStyle = {
    borderRadius: "10px",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
  };

  if (!items) {
    return <div>Loading...</div>;
  }

  console.log(video.results);

  return (
    <div>
      <Baniere></Baniere>
      <div style={backgroundImageStyle} className="mt-3">
        <div style={overlayStyle}></div>
        <div style={contentStyle}>
          <h1>{items.original_title}</h1>
          <p>{items.overview}</p>
          <button className="btn btn-primary">Regarder la bande anonce</button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src={`https://image.tmdb.org/t/p/w1280/${items.poster_path}`}
              alt={items.title}
              className="img-fluid rounded"
              style={posterStyle}
            />
          </div>
          <div className="col-md-8">
            <h2>{items.title}</h2>
            <p>{items.release_date}</p>
            <p>
              {items.genres &&
                items.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>{items.runtime} minutes</p>
            <p>
              {items.vote_average} / 10 ({items.vote_count} votes)
            </p>
            <h4>Overview</h4>
            <p>{items.overview}</p>
            <h4>Cast</h4>
            <div className="cast-grid d-flex">
              {casts.cast &&
                casts.cast.slice(0, 5).map((actor) => (
                  <div
                    key={actor.id}
                    className="cast-card mx-2 d-flex flex-column align-items-center"
                  >
                    <img
                      className="cast-image rounded-circle"
                      src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                      alt={actor.name}
                      style={{
                        height: "60px",
                        width: "60px",
                      }}
                    />
                    <div className="cast-name">{actor.name}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFilm;
