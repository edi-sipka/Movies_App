/* eslint-disable */
import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const movieText = 'Taxi';
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      );
      console.log(response).catch((err) => {
        console.log('Err:', err);
      });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
      ;
    </div>
  );
};

export default Home;
