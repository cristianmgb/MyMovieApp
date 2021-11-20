import {useEffect, useState} from 'react';
import API from '../api/api';

export const useMovies = () => {
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    const nowPlayingPromise = API.getMovies('now_playing');
    const topRatedPromosie = API.getMovies('top_rated');
    const upComingPromise = API.getMovies('upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      topRatedPromosie,
      upComingPromise,
    ]);

    setMovies({
      nowPlaying: response[0].results,
      topRated: response[1].results,
      upComing: response[2].results,
    });

    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {...movies, loading};
};
