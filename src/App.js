import './App.css';
import Landing from "./components/Landing";
import Home from "./components/Home";
import Detail from "./components/Detail";
import NavBar from "./components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {

  const location =useLocation();
  return (
    <div className="app">
      <div>{location.pathname === "/" ? null : <NavBar />}</div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/Home"
          element={<Home  />}
        ></Route>
        <Route path="/detail/:detailId/:rating" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
