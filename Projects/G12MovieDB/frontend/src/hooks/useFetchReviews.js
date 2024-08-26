import { useState, useEffect } from 'react';

const useFetchReviews = (id, onReviewsLoaded) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/review/user=${id}`)
        .then(response => response.json())
        .then(data => {
          setReviews(data);
          // Call the callback function when data fetching is complete
          if (onReviewsLoaded) {
            onReviewsLoaded();
          }
        })
        .catch(error => console.error('Error:', error));
    }
  }, [id, onReviewsLoaded]);
  return reviews;

};

export default useFetchReviews;