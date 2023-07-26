import "./App.css";
import Mur from "./components/Mur";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import DetailFilm from "./components/DetailFilm";
import Acteur from "./components/Acteur";
import ActorDetails from "./components/ActeurDetails";
import Recherche from "./components/Recherche";

function App() {
  // Build with ❤️ by Manefa Yousouf and Juliana Camila
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#090a0e", color: "white" }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Mur></Mur>}></Route>
          <Route
            path="/detailFilm/:filmId"
            exact
            element={<DetailFilm></DetailFilm>}
          ></Route>
          <Route path="/acteur" exact element={<Acteur></Acteur>}></Route>
          <Route
            path="/detailActeur"
            exact
            element={<ActorDetails></ActorDetails>}
          ></Route>
          <Route
            path="/rechercheFilm"
            exact
            element={<Recherche></Recherche>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
