import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Cast {
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

    let url = `/movie/${this._movie_id}/credits?api_key=${this.api_key}&language=${this._language}`;

    return axios
      .get(url)
      .then(result => {
        return result.data.cast;
      })
      .then(data => {
        return data;
      })
      .catch(err => {
        toast.error('error!!!');
      });
  }
}

export default Cast;
