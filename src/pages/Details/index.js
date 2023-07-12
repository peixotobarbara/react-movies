import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { apiKey } from '../../services/api/key';
import { Container } from '../../components/Container/styles';
import { ImArrowLeft2, ImStarFull } from 'react-icons/im';
import {
    MovieDetails,
    DetailsInfo,
    MovieGenres,
} from '../../pages/Details/styles';

function Details() {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [genres, setGenres] = useState([]);
    const imagePath = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const getDetails = async () => {
            try {
                const response = await api.get(
                    `/movie/${id}?api_key=${apiKey}&language=pt-BR`
                );

                setDetails(response.data);
                setGenres(response.data.genres);
            } catch (err) {
                console.log(err);
            }
        };

        getDetails();
    }, []);

    useEffect(() => {
        const getRecomnendations = async () => {
            try {
                const response = await api.get(
                    `/movie/${id}/recommendations?api_key=${apiKey}&language=pt-BR&page=1`
                );

                //setRecommendations(response.data.results);
            } catch (err) {
                console.log(err);
            }
        };
        getRecomnendations();
    }, []);

    return (
        <Container>
            <h1>Detalhes</h1>

            <MovieDetails>
                <div>
                    <Link to='/'>
                        <ImArrowLeft2 color='white' size='32px' />
                        <span>Voltar</span>
                    </Link>
                </div>

                <DetailsInfo>
                    <img
                        src={`${imagePath}${details.poster_path}`}
                        alt={details.title}
                    />
                    <div className='details-text'>
                        <h2>{details.title}</h2>
                        <p>{details.overview}</p>

                        <MovieGenres>
                            {genres.map((g) => {
                                return <span key={g.id}>{g.name}</span>;
                            })}
                        </MovieGenres>

                        <p>
                            Data de lançamento:{' '}
                            {/* {new Intl.DateTimeFormat('pt-BR', {year: 'numeric', month: 'long', day: '2-digit'}).format(details.release_date)} */}
                            {details.release_date}
                        </p>
                        <p>
                            Nota: {details.vote_average}{' '}
                            <ImStarFull color='yellow' />
                        </p>
                        <a href={details.homepage} target='_blank'>
                            Assista
                        </a>
                    </div>
                </DetailsInfo>
            </MovieDetails>
        </Container>
    );
}

export default Details;
