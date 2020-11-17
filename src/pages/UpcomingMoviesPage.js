import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import AddToWatchlistButton from '../components/buttons/addToWatchlist'
import {MoviesContext} from '../contexts/moviesContext'

const UpcomingMovies = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming.filter((m) => {  // New
    return !("upcoming" in m);
  });

  return (
    <PageTemplate
      title="No. Movies"
      movies={upcoming}  /* Changed */
      action={(movie) => {
        return <AddToWatchlistButton movie={movie} />;
      }}
    />
  );
};

export default UpcomingMovies;
