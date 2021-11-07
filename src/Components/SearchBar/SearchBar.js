import { useState } from 'react';
import s from './SearchBar.module.css';
import PropTypes from 'prop-types';

export default function SearchBar(props) {
  const [queryMovie, setQueryMovie] = useState('');

  const handleSearchChange = e => {
    setQueryMovie(e.target.value.toLowerCase());
  };

  const handleSearchSubmit = e => {
    e.preventDefault();

    props.onSubmit(queryMovie);
    setQueryMovie('');
    return;
  };

  return (
    <div>
      <form className={s.formSearch} onSubmit={handleSearchSubmit}>
        <div className={s.inputGroup}>
          <input
            type="text"
            value={queryMovie}
            className={s.formInput}
            onChange={handleSearchChange}
            placeholder="Search..."
          />{' '}
          <span className={s.inputGroupBtn}>
            <button type="submit" className={s.btn}>
              Search
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  props: PropTypes.string,
};
