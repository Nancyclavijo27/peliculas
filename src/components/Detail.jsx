import React, { useState, useEffect } from "react";
import "./Detail.css";

import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Detail(props) {
  const path = useParams(); // {detailId: '772071'}esto me trae el objeto con la info de la card moviId
  // console.log(path);

  const [detail, setDetail] = useState("");

  const getDetail = async function () {
    const detailMovie = await axios.get(
      `https://api.themoviedb.org/3/movie/${path.detailId}?api_key=230c8944d7c01671a140ee7eb22facd5`
    );
    setDetail(detailMovie.data);
    // console.log(detailMovie.data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div className="movieDetail">
      
      <img
        src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
        alt={detail.title}
        className="movieDetail__poster"
      />
      <div className="movieDetail__info">
      <Link to="/home">
        <button className="button">Back</button>
      </Link>
        <h1 className="movieDetail__title">{detail.title}</h1>
        <div className="movieDetail__meta">
          <span className="movieDetail__releaseDate">{detail.releaseDate}</span>
          <span className="movieDetail__rating">{path.rating}</span>
        </div>
        <p className="movieDetail__description">{detail.overview}</p>
      </div>
    </div>
  );
}