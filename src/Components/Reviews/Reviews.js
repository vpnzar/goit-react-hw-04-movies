import s from './Reviews.module.css';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import ReviewUrl from '../Services/ReviewUrl';
const base_url = 'https://api.themoviedb.org/3/';
const api_key = 'd9c26290bc85ba29ebc6eb2625d13196';
const newReviewUrl = new ReviewUrl(base_url, api_key);

export default function Review() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState('init');

  useEffect(() => {
    setStatus('pending');
    newReviewUrl.movieId = movieId;
    newReviewUrl
      .searchMovies()
      .then(data => {
        setReviews(data);
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  }, [movieId]);

  if (reviews.length === 0) {
    return <h3>We do not have any reviews for this movie.</h3>;
  }
  if (reviews) {
    return (
      <section>
        {reviews.map(item => (
          <ul>
            <li key={item.id} className={s.TrendItem}>
              <p key={uuidv4()} className={s.ReviewAuthor}>
                Author: {item.author}
              </p>
              <p key={uuidv4()} className={s.ReviewText}>
                {' '}
                {item.content}
              </p>
            </li>
          </ul>
        ))}
      </section>
    );
  }
  if (status === 'error') {
    return status === 'error' && toast.error('ALARM!!!');
  }
}

Review.propTypes = {
  movieId: PropTypes.number,
};
