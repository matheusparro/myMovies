import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export const MovieItem = ({ title, id, poster_path }) => {
    const [poster, setPoster] = useState('');

    useEffect(() => {
        async function fetchPoster() {
            if (poster_path) {
                // Monta a URL completa da imagem da capa
                const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
                setPoster(posterUrl);
            }
        }
        fetchPoster();
    }, [id]);

    return (
        <div className="movie-item" style={{ display: "flex", alignItems: "center" }} tabIndex="-1">
            <div className="movie-poster" style={{ outline: 'none'}} tabIndex="-1">
                <Link to={`movie/${id}`}>
                    <img src={poster} alt={title} tabIndex="-1" style={{outline: 'none', width: '100%', height: '100%', objectFit: 'cover' }} />
                </Link>
            </div>
        </div>

    );
};
