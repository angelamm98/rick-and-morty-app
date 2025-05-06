import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results);
                setLoading(false);
            })
            .catch((err) => console.error("Error al obtener los personajes:", err));
    }, []);

    const addFavorite = (item, type) => {
        const exists = favorites.some(
            (fav) => fav.id === item.id && fav.type === type
        );
        if (!exists) {
            setFavorites([...favorites, { ...item, type }]);
        }
    };

    const removeFavorite = (id, type) => {
        setFavorites(
            favorites.filter((fav) => !(fav.id === id && fav.type === type))
        );
    };

    return (
        <AppContext.Provider
            value={{
                characters,
                setCharacters,
                loading,
                favorites,
                addFavorite,
                removeFavorite
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
