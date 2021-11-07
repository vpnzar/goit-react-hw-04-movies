import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';

class MoviesUrl {
  constructor(base_url, api_key) {
    this.base_url = base_url;
    this.api_key = api_key;
    this._searchPage = 1;
    this._searchQuery = '';
  }

  get searchQuery() {
    return this._searchQuery;
  }
  set searchQuery(value) {
    return (this._searchQuery = value);
  }
  get searchPage() {
    return this._searchPage;
  }
  set searchPage(value) {
    return (this._searchPage = value);
  }

  searchMovies() {
    axios.defaults.baseURL = this.base_url;

    let url = `/search/movie?api_key=${this.api_key}&query=${this._searchQuery}&page=${this._searchPage}&include_adult=false`;

    return axios
      .get(url)
      .then(result => {
        return result.data.results;
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        toast.error('error!!!');
      });
  }
}

// MoviesUrl.propTypes = {
//   base_url: PropTypes.string.isRequired,
//   api_key: PropTypes.string.isRequired,
//   _searchQuery: PropTypes.string.isRequired,
//   _searchPage: PropTypes.number.isRequired,
// };

export default MoviesUrl;
