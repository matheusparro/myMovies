import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import MoviesServices from "../api/MoviesServices";
import {HeaderContainer} from "../styles/HeaderContainer";
import styled from 'styled-components';

const MovieContainer = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    align-items: center;
    padding: 20px;
    background-color: #f4f4f4; /* Cor de fundo de exemplo */
`;

const MovieImage = styled.img`
  max-width: 30rem; /* Diminui o valor máximo de largura */
  max-height: 30rem; /* Diminui o valor máximo de altura */
  object-fit: cover;
`;


const MovieDetails = styled.div`
  margin-left: 3rem;
  h1 {
    font-size: 24px;
    margin: 0 0 10px 0; /* Adicionado espaço na parte inferior para afastar o texto da imagem */
  }

  p {
    font-size: 16px;
    margin: 0;
    word-wrap: break-word; /* Quebra de palavra no final das linhas */
  }
`;

export const MovieDetail = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const fetchMovie  = async () =>{
        const {data} = await MoviesServices.getMovieById(id);
        console.log(data)
        setMovie(data);
    }

    useEffect( () => {
        fetchMovie();
    }, []);

    return(
        <HeaderContainer style={{outline:"none", pointerEvents: "none"}}>
            <MovieImage
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{outline:"none", pointerEvents: "none"}}
            />
            <MovieDetails style={{pointerEvents: "none"}}>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
            </MovieDetails>
        </HeaderContainer>
    )

}