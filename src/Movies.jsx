import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();
  const MovieResult = () => {
    return (
      <section className="movie-container-parent">
        <section className="movie-container">
          {movie.map((curMovie) => {
            const { imdbID, Title, Poster } = curMovie;
            const movieName = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`}>
                <div className="movie-detail">
                  <h2>
                    {movieName.length >= 15 ? `${movieName}...` : movieName}
                  </h2>
                  <section className="image">
                    <img src={Poster} alt={imdbID} />
                  </section>
                </div>
              </NavLink>
            );
          })}
        </section>
      </section>
    );
  };

  const LoadingPage = () => {
    return (
      <div class="loading-page">
        <div class="loading-spinner"></div>
      </div>
    );
  };
  return <>{isLoading ? <LoadingPage /> : <MovieResult />}</>;
};

export default Movies;
