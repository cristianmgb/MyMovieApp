import {useEffect, useState} from 'react';
import API from '../api/api';

export const useMovies = () => {
  const [movies, setMovies] = useState({
    nowPlaying: [],
    topRated: [],
    upComing: [],
  });
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    const nowPlayingPromises = API.getMovies('now_playing');
    const topRatedPromise = API.getMovies('top_rated');
    const upComingPromise = API.getMovies('upcoming');

    const response = await Promise.all([
      nowPlayingPromises,
      topRatedPromise,
      upComingPromise,
    ]);
    
    setMovies({
      nowPlaying: response[0].results,
      topRated: response[1].results,
      upComing: response[2].results,
    });
    console.log(movies);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    ...movies,
    loading,
  };
};
