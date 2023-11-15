import {MoviesList} from "../components/MoviesList";
import {MoviesContainer} from "../styles/MoviesContainer";
import {useEffect, useState} from "react";
import MoviesServices from "../api/MoviesServices";
import {HeaderContainer} from "../styles/HeaderContainer";
export const Home = () =>{
    const [movies, setMovies] = useState([{}]);
    const fetchMovies  = async () =>{
        const { data } = await MoviesServices.getMovies()
        setMovies(data.results);
    }
    useEffect(() => {
        fetchMovies()
        console.log(movies)
    }, []);

    return (
        <HeaderContainer>
            <MoviesContainer>
                <MoviesList movies={movies} />
            </MoviesContainer>
        </HeaderContainer>
    );
}
