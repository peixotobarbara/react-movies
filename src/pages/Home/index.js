import { MovieList } from '../../components/MovieList/styles';
import { Movie } from '../../components/Movie/styles';
import { Container } from '../../components/Container/styles';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { apiKey } from '../../services/api/key';
import { Link } from 'react-router-dom';
import { ImStarFull } from 'react-icons/im';

function Home() {
    const [movies, setMovies] = useState([]);
    const [movieName, setMovieName] = useState('');
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    const findMovie = async () => {
        try {
            const response = await api.get(
                `/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
            );
            setMovies(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        findMovie();
    }, []);

    useEffect(() => {
        const findMovieByName = async (movieName) => {
            try {
                if (movieName != '') {
                    const response = await api.get(
                        `/search/movie?api_key=${apiKey}&language=pt-BR&query=${movieName}&page=1&include_adult=false`
                    );
                    setMovies(response.data.results);
                    return;
                }
                findMovie();
            } catch (error) {
                console.log(error);
            }
        };

        findMovieByName(movieName);
    }, [movieName]);

    return (
        <Container>
            <h1>Filmes</h1>

            <input
                type='text'
                placeholder='Pesquise pelo nome do filme...'
                onChange={(e) => {
                    setMovieName(e.target.value);
                }}
            />

            <MovieList>
                {movies.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/Details/${movie.id}`}>
                                <img
                                    src={`${imagePath}${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </Link>
                            <span>{movie.title}</span>
                            <small>
                                {movie.vote_average}{' '}
                                <ImStarFull size='16' color='yellow' />
                            </small>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default Home;
