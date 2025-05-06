import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favorites, addFavorite, removeFavorite } = useContext(AppContext);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => {
        setLocations(data.results);
        setLoading(false);
      });
  }, []);

  const isFavorite = (loc) => {
    return favorites.some(
      (fav) => fav.id === loc.id && fav.type === "location"
    );
  };

  if (loading) return <p className="text-center mt-4">Cargando ubicaciones...</p>;

  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#A6CCCC", minHeight: "100vh", padding: "2rem" }}
    >
      <h2 className="mb-4">Ubicaciones</h2>
      <div className="row">
        {locations.map((loc) => (
          <div key={loc.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card p-3 shadow-sm text-center">
              <h5>{loc.name}</h5>
              <p><strong>Tipo:</strong> {loc.type}</p>
              <p><strong>Dimensión:</strong> {loc.dimension}</p>

              {isFavorite(loc) ? (
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => removeFavorite(loc.id, "location")}
                >
                  Quitar de favoritos 💔
                </button>
              ) : (
                <button
                  className="btn btn-outline-primary mt-2"
                  onClick={() => addFavorite(loc, "location")}
                >
                  Agregar a favoritos 💖
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
