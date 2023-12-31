import propTypes from 'prop-types';
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title}
        </Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres && genres.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  )

}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;