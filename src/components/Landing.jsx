import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <div className="landing">
      <h1 className="title">Cartelera Digital   </h1>
      <Link to="/home">
        <button className="btn">Iniciar</button>
      </Link>
    </div>
  );
}