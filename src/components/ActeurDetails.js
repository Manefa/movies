import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Baniere from "./Baniere";

const ActorDetails = () => {
  const location = useLocation();
  const acteur = location.state.acteur;

  const imageStyle = {
    width: "100%",
    height: "auto",
  };
  return (
    <div className="container-fluid" style={{ backgroundColor: "#090a0e" }}>
      <Baniere></Baniere>
      <div className="mt-3">
        <Container>
          <Row>
            <Col sm={4}>
              <Image
                src={`https://image.tmdb.org/t/p/w1280${acteur.profile_path}`}
                alt={acteur.name}
                style={imageStyle}
                fluid
              />
            </Col>
            <Col sm={8}>
              <h2>{acteur.name}</h2>
              <h4 className="mt-3">{acteur.known_for_department}</h4>
              <h5 className="mt-3">Celebre pour:</h5>
              <div className="d-flex justify-content-between">
                {acteur.known_for.map((item, index) => (
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w1280${item.poster_path}`}
                      height={100}
                      width={100}
                    ></img>
                    <p key={index}>{item.title}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ActorDetails;
