import PropTypes from 'prop-types';
import s from './TrendList.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import TrendingUrl from '../Services/TrendingUrl';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'd9c26290bc85ba29ebc6eb2625d13196';
const newTrendingUrl = new TrendingUrl(base_url, api_key);

export default function TrendList() {
  const [status, setStatus] = useState('init');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setStatus('pending');
    newTrendingUrl
      .searchMovies()
      .then(data => {
        setSearchResults(data);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);

  if (status === 'pending') {
    return <Loader />;
  }

  if (searchResults) {
    return (
      <>
        {searchResults &&
          searchResults.map(movie => (
            <li key={movie.id} className={s.TrendItem}>
              <Link to={`movies/${movie.id}`}>
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
}

TrendList.propTypes = {
  name: PropTypes.string,
};
