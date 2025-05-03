import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
                setLoading(false);
            })
            .catch(err => console.error("Error al obtener los personajes:", err));
    }, []);

    const addFavorite = (character) => {
        // Evitar duplicados
        if (!favorites.find(fav => fav.id === character.id)) {
            setFavorites([...favorites, character]);
        }
    };

    const removeFavorite = (id) => {
        setFavorites(favorites.filter(fav => fav.id !== id));
    };

    return (
        <AppContext.Provider value={{
            characters,
            loading,
            favorites,
            addFavorite,
            removeFavorite
        }}>
            {children}
        </AppContext.Provider>
    );
};
