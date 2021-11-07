import s from './MoviesView.module.css';
import PropTypes from 'prop-types';
// import { useState } from 'react';
import Loader from '../Components/Loader/Loader';
import { lazy, Suspense } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import SearchBar from '../Components/SearchBar/SearchBar';
// import MoviesList from '../Components/MoviesList/MoviesList';
const MoviesList = lazy(() =>
  import(
    '../Components/MoviesList/MoviesList' /* webpackChunkName: "MoviesList" */
  ),
);

export default function MoviesView() {
  const location = useLocation();
  const history = useHistory();

  // const { movieQuery } = useParams();
  // const [queryMovie, setQueryMovie] = useState('');
  const queryUrl = new URLSearchParams(location.search).get('query') ?? '';

  const handleSearchFormSubmit = queryMovie => {
    // setQueryMovie(queryMovie);
    history.push({ ...location, search: `query=${queryMovie}` });
  };

  return (
    <>
      <section>
        <SearchBar onSubmit={handleSearchFormSubmit} />
        <ul className={s.MoviesList}>
          <Suspense fallback={<Loader />}>
            {<MoviesList text={queryUrl} />}
          </Suspense>
        </ul>
      </section>
    </>
  );
}

MoviesView.propTypes = {
  queryMovie: PropTypes.string,
};
