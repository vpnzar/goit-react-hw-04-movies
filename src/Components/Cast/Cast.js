import s from './Cast.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import CastUrl from '../Services/CastUrl';
const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'd9c26290bc85ba29ebc6eb2625d13196';
const newCastUrl = new CastUrl(base_url, api_key);
const castImgGallery = 'https://www.themoviedb.org/t/p/w276_and_h350_face/';

export default function Cast() {
  const { movieId } = useParams();
  const [castRes, setCastRes] = useState([]);
  const [status, setStatus] = useState('init');

  useEffect(() => {
    setStatus('pending');
    newCastUrl.movieId = movieId;
    newCastUrl
      .searchMovies()
      .then(data => {
        setCastRes(data);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [movieId]);

  if (status === 'pending') {
    return <Loader />;
  }

  if (castRes) {
    return (
      <section>
        {castRes.map(actor => (
          <div className={s.castInfo}>
            <div key={uuidv4()} className={s.castItemImg}>
              <img
                src={`${castImgGallery}` + actor.profile_path}
                alt={'actor'}
                width="100"
              />
            </div>
            <ul className={s.CastName}>
              <li key={actor.id} className={s.TrendItem}>
                <p>{actor.name}</p>
              </li>
            </ul>
            <p key={uuidv4()}>Character: {actor.character}</p>
          </div>
        ))}
      </section>
    );
  }
  if (status === 'error') {
    return status === 'error' && toast.error('ALARM!!!');
  }
}

Cast.propTypes = {
  movieId: PropTypes.number,
};
