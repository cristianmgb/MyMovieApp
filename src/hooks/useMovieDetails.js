import {useEffect, useState} from 'react';
import API from '../api/api';

export const useMovieDetails = movieId => {
  const [state, setState] = useState({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    //Promises
    const movieDetailsPromise = API.getMovies(`${movieId}`);
    const movieCastDetailsPromise = API.getMovies(`${movieId}/credits`);

    //Trigger promises
    const [movieDetailResponse, movieCastDetailResponse] = await Promise.all([
      movieDetailsPromise,
      movieCastDetailsPromise,
    ]);

    //Update state after get responses
    setState({
      isLoading: false,
      movieFull: movieDetailResponse,
      cast: movieCastDetailResponse.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
