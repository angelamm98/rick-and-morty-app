import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#F5E14B",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "'Nunito', sans-serif"
      }}
    >
      <div style={{ flex: 1, display: "flex", gap: "0.5rem" }}>
        <Link to="/" className="btn btn-outline-dark">Personajes</Link>
        <Link to="/episodes" className="btn btn-outline-dark">Episodios</Link>
        <Link to="/locations" className="btn btn-outline-dark">Ubicaciones</Link>
      </div>

      <h1
        style={{
          flex: 1,
          textAlign: "center",
          margin: 0,
          fontSize: "1.5rem",
          fontWeight: "bold"
        }}
      >
        Rick and Morty Characters
      </h1>

      <div style={{ flex: 1, textAlign: "right" }}>
        <Link to="/favorites" className="btn btn-dark">💛 Mis favoritos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
