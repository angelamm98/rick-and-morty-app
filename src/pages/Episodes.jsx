import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { favorites, addFavorite, removeFavorite } = useContext(AppContext);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results);
        setLoading(false);
      });
  }, []);

  const isFavorite = (ep) => {
    return favorites.some(
      (fav) => fav.id === ep.id && fav.type === "episode"
    );
  };

  if (loading) return <p className="text-center mt-4 text-white">Cargando episodios...</p>;

  return (
    <div className="container-fluid" style={{ backgroundColor: "#0A3C6A", minHeight: "100vh", padding: "2rem" }}>
      <h2 className="text-white mb-4">Episodios</h2>
      <div className="row">
        {episodes.map((ep) => (
          <div key={ep.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card p-3 shadow-sm text-center">
              <h5>{ep.name}</h5>
              <p><strong>Fecha:</strong> {ep.air_date}</p>
              <p><strong>Código:</strong> {ep.episode}</p>

              {isFavorite(ep) ? (
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => removeFavorite(ep.id, "episode")}
                >
                  Quitar de favoritos 💔
                </button>
              ) : (
                <button
                  className="btn btn-outline-primary mt-2"
                  onClick={() => addFavorite(ep, "episode")}
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

export default Episodes;
