import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Movies = ({ coverImg, title, year, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="/movie">
          {title} - {year}
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

Movies.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movies;