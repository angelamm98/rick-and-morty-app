import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(AppContext);

  if (favorites.length === 0) {
    return <p className="text-center mt-4">Aún no tienes personajes favoritos 💔</p>;
  }

  return (
    <div className="container-fluid" style={{ backgroundColor: "#35C9DD", minHeight: "100vh", padding: "2rem" }}>
        <h2 className="text-white mb-4">Tus Favoritos</h2>
      <div className="row justify-content-center">
        {favorites.map((fav) => (
          <div key={`${fav.type}-${fav.id}`} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm character-card text-center p-3">
              {fav.image && (
                <img
                  src={fav.image}
                  alt={fav.name}
                  className="card-img-top mb-2"
                />
              )}

              <h5 className="card-title">{fav.name}</h5>

              <p className="card-text">
                {fav.type === "character" && fav.species}
                {fav.type === "episode" && `📺 ${fav.episode} – ${fav.air_date}`}
                {fav.type === "location" && `🌍 ${fav.type} – ${fav.dimension}`}
              </p>

              <button
                className="btn btn-danger mt-2"
                onClick={() => removeFavorite(fav.id, fav.type)}
              >
                Quitar de favoritos 💔
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
