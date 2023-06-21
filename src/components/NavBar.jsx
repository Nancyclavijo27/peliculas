import React, { useState } from "react";
import "./NavBar.css";

export default function Navbar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que necesites con el valor de búsqueda
    onSearch(searchValue);
    // console.log("Valor de búsqueda:", searchValue);
    setSearchValue("")
  };

  return (
    <nav className="navbar">
      <div className="navbar__search">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchSubmit} type="submit">
          Search
        </button>
      </div>
    </nav>
  );
}