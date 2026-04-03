import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const API_KEY = "969cc99b";

  const searchMovies = async () => {
  const res = await axios.get(
    `http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
  );
  setMovies(res.data.Search || []);
 };

  return (
    <div className="container">
      <h1>🎬 Movie Search App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchMovies}>Search</button>
      </div>

      <div className="movie-list">
        {movies.map((movie) => (
          <div className="card" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <p>Type: {movie.Type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;