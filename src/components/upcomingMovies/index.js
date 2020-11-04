import React from "react";
import Movie from "../movieCard/";
import "./upcomingMovies.css";

const UpcomingMovies = props => {
  const movieCards = props.movies.map(m => (
    <Movie key={m.id} movie={m} buttonHandler={props.buttonHandler} />
  ));
  return <div className="row movies bg-info">{movieCards}</div>;
};

export default UpcomingMovies;