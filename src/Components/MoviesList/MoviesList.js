import PropTypes from 'prop-types';
import s from './MoviesList.module.css';
import { useState, useEffect } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import Loader from '../Loader/Loader';
import MoviesUrl from '../Services/MoviesUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'd9c26290bc85ba29ebc6eb2625d13196';
const newMoviesUrl = new MoviesUrl(base_url, api_key);

const MoviesList = ({ text }) => {
  const location = useLocation();
  const { url } = useRouteMatch();
  const [status, setStatus] = useState('init');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!text.trim()) {
      setSearchResults([]);
      return;
    }

    setStatus('pending');
    newMoviesUrl.searchQuery = text;
    newMoviesUrl
      .searchMovies()
      .then(data => {
        setSearchResults(data);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [text]);

  if (status === 'pending') {
    return <Loader />;
  }

  if (searchResults) {
    return (
      <>
        {searchResults.map(movie => (
          <li key={movie.id} className={s.TrendItem}>
            <Link
              to={{
                pathname: `${url}/${movie.id}`,
                state: { from: { location } },
              }}
            >
              {movie.original_title ? movie.original_title : movie.name}
            </Link>
          </li>
        ))}
      </>
    );
  }
  if (status === 'error') {
    return status === 'error' && toast.error('ALARM!!!');
  }
};

export default MoviesList;

MoviesList.propTypes = {
  text: PropTypes.string.isRequired,
};
