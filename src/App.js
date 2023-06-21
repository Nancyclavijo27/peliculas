import './App.css';
import Landing from "./components/Landing";
import Home from "./components/Home";
import Detail from "./components/Detail";
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();//retorna el path donde voy ingresando es como el objeto path
  const [popular, setPopular] = useState();//populares es un objeto y setPopulares es la funcion que trabaja con el objeto  estado de populares
  const [allMovies, setAllMovies] = useState();//estado de todas las peliculas

  const getAllMovies = async function () {//esta es la funcion que se ejecuta en el useEffect y trae todas las peliculas 
    const popular_movies = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=230c8944d7c01671a140ee7eb22facd5&language=en-US&page=1"
    );
    setPopular(popular_movies.data.results);
    //console.log(popular_movies.data);

    const all_movies = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=230c8944d7c01671a140ee7eb22facd5&language={language}&page=1"
    );
    setAllMovies(all_movies.data.results);
    //console.log(all_movies.data.results);
  };

  useEffect(() => {//lo utilizo para levantar el api cuando entro solo eso y no mas 
    getAllMovies();
  }, []);


  async function onSearch(title) {
    // ** EXTRA ** Podemos usar try catch para manejo de errores en conjunto
    // con algún condicional y cartel de alert
      const result = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=230c8944d7c01671a140ee7eb22facd5&query=${title}&language=en-US`
      );
      // console.log(result.data.results)
      setAllMovies(result.data.results)
  }
  function reset(){
    getAllMovies();
  }

  return (
    <div className="app">
      <div>{location.pathname === "/" ? null : <NavBar onSearch={onSearch} />}</div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/Home"
          element={<Home popular_movies={popular} allMovies={allMovies} reset={reset} />}
        ></Route>
        <Route path="/detail/:detailId/:rating" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}
export default App;
