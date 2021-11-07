import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';

class PersonUrl {
  constructor(base_url, api_key) {
    this.base_url = base_url;
    this.api_key = api_key;
    this._person_id = null;
  }

  set personId(value) {
    return (this._person_id = value);
  }
  get personId() {
    return this._person_id;
  }

  searchMovies() {
    axios.defaults.baseURL = this.base_url;

    let url = `/person/${this._person_id}/images?api_key=${this.api_key}`;

    return axios
      .get(url)
      .then(result => {
        return result.data;
      })
      .then(data => {
        return data;
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

export default PersonUrl;

// &time_window=${this._time_window}&media_type=${this._media_type}
