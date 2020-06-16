import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <Link //Movie 컴포넌트를 클릭하면 정보가 전달됨
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <ul className="movie_genres">
            {/* {genres.map((genre, index) => (
              <li key={index} className="genres_genre">
                {genre}
              </li>
            ))} */}
            {genres}
          </ul>
          <p className="movie_summary">{summary}</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
