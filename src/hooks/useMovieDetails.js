import {useEffect, useState} from 'react';
import API from '../api/api';

export const useMovieDetails = movieId => {
  const [state, setState] = useState({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailPromise = API.getMovies(`${movieId}`);
    const movieCastDetailsPromise = API.getMovies(`${movieId}/credits`);

    const [movieDetail, movieCastDetails] = await Promise.all([
      movieDetailPromise,
      movieCastDetailsPromise,
    ]);

    setState({
      isLoading: false,
      movieFull: movieDetail,
      cast: movieCastDetails.cast,
    });
    console.log('use', movieDetail);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
