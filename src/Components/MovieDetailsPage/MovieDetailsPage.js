import { useState, useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { toast } from 'react-toastify';
import {
  useLocation,
  useHistory,
  Route,
  NavLink,
  useParams,
} from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import DetailMovieUrl from '../Services/DetailMovieUrl';
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);
const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "Cast" */));
const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'd9c26290bc85ba29ebc6eb2625d13196';
const newDetailMovieUrl = new DetailMovieUrl(base_url, api_key);
const movieImgGallery = 'https://www.themoviedb.org/t/p/w440_and_h660_face/';

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const [detailResults, setDetailResults] = useState([]);
  const [status, setStatus] = useState('init');
  const { movieId } = useParams();

  const {
    poster_path,
    genres,
    original_title,
    vote_average,
    overview,
    id,
    revenue,
    release_date,
  } = detailResults;

  const handleClick = () => {
    history.push(location?.state?.from?.location ?? '/');
  };

  useEffect(() => {
    setStatus('pending');
    newDetailMovieUrl.movieId = movieId;
    newDetailMovieUrl
      .searchMovies()
      .then(data => {
        setDetailResults(data);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [movieId]);

  if (status === 'pending') {
    return <Loader />;
  }

  if (movieId) {
    return (
      <section className={s.movieMainSection}>
        <button className={s.movieMainBtn} type="button" onClick={handleClick}>
          ← Go Back
        </button>
        <div className={s.movieMainInfo}>
          <div className={s.movieMainImage}>
            <img
              src={`${movieImgGallery}` + poster_path}
              alt={'logo'}
              width="200"
            />
          </div>
          <div className={s.movieMainDescr}>
            <div className={s.movieMainTitle}>
              <h1 className={s.movieTitle}>
                {original_title}
                {' ('}
                {release_date && release_date.slice(0, 4)}
                {')'}
              </h1>
              <p className={s.movieMainScore}>
                User Score: {vote_average * 10}%
              </p>
            </div>
            <div className={s.movieOverView}>
              <h2 className={s.movieOverViewTitle}>Overview</h2>
              <p className={s.movieOverViewTitle}>{overview}</p>
            </div>
            <p className={s.movieOverViewInfo}>
              <b></b> {}
            </p>
            <div className={s.movieGenres}>
              <h2 className={s.movieGenresTitle}>Genres</h2>
              <div className={s.movieGenresItems}>
                {genres &&
                  genres.map(genre => (
                    <p key={genre.id} className={s.movieGenresInfo}>
                      {genre.name},
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <section className={s.movieAddInfoSection}>
          <div className={s.movieAddInfo}>
            <h2 className={s.movieAddInfoTitle}>Additional Information</h2>
            <ul>
              <li key={id} className={s.Cast}>
                <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
              </li>
              <li key={revenue} className={s.Cast}>
                <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
        </section>
        <Suspense fallback={<Loader />}>
          <Route path="/movies/:movieId/cast">
            <Cast />
          </Route>
          <Route path="/movies/:movieId/reviews">
            <Reviews />
          </Route>
        </Suspense>
      </section>
    );
  }
  if (status === 'error') {
    return status === 'error' && toast.error('ALARM!!!');
  }
}

MovieDetailsPage.propTypes = {
  movieId: PropTypes.number,
};
