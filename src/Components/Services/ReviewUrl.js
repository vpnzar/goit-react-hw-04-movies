import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';

class ReviewUrl {
  constructor(base_url, api_key) {
    this.base_url = base_url;
    this.api_key = api_key;
    this._movie_id = null;
    this._language = 'en-US';
  }

  set movieId(value) {
    return (this._movie_id = value);
  }
  get movieId() {
    return this._movie_id;
  }
  get movieLanguage() {
    return this._language;
  }
  set movieLanguage(value) {
    return (this._language = value);
  }

  searchMovies() {
    axios.defaults.baseURL = this.base_url;

    let url = `/movie/${this._movie_id}/reviews?api_key=${this.api_key}&language=${this._language}&page=1`;

    return axios
      .get(url)
      .then(result => {
        return result.data;
      })
      .then(data => {
        return data.results;
      })
      .catch(err => {
        toast.error('error!!!');
      });
  }
}

// TheMovieUrl.propTypes = {
//   base_url: PropTypes.string.isRequired,
//   api_key: PropTypes.string.isRequired,
//   _searchQuery: PropTypes.string.isRequired,
//   _searchPage: PropTypes.number.isRequired,
// };

export default ReviewUrl;
