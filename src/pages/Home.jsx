import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    const {
        characters,
        loading,
        favorites,
        addFavorite,
        removeFavorite
    } = useContext(AppContext);

    const isFavorite = (character) =>
        favorites.some((fav) => fav.id === character.id);

    if (loading) return <p className="text-center mt-4">Cargando personajes...</p>;

    return (
        <div className="container">
            <div className="row justify-content-center">
                {characters.map((char) => (
                    <div key={char.id} className="col-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={char.image}
                                alt={char.name}
                                className="card-img-top"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{char.name}</h5>
                                <p className="card-text">{char.species}</p>
                                {isFavorite(char) ? (
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => removeFavorite(char.id)}
                                    >
                                        Quitar de favoritos 💔
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => addFavorite(char)}
                                    >
                                        Agregar a favoritos 💖
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
