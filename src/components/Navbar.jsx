import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#F5E14B", // Amarillo de tu paleta
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)"
      }}
    >
      <div style={{ flex: 1 }}></div>

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
        <button className="btn btn-dark">💛 Mis favoritos</button>
      </div>
    </nav>
  );
};

export default Navbar;
