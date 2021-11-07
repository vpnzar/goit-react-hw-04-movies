import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';

class TrendingUrl {
  constructor(base_url, api_key) {
    this.base_url = base_url;
    this.api_key = api_key;
    this._time_window = 'day';
    this._media_type = 'movie';
  }

  set mediaType(value) {
    return (this._media_type = value);
  }
  get mediaType() {
    return this._media_type;
  }
  get timeWindow() {
    return this._time_window;
  }
  set timeWindow(value) {
    return (this._time_window = value);
  }

  searchMovies() {
    axios.defaults.baseURL = this.base_url;

    let url = `/trending/${this._media_type}/${this._time_window}?api_key=${this.api_key}`;

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

export default TrendingUrl;

// &time_window=${this._time_window}&media_type=${this._media_type}
