/* eslint-disable */
import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

const Home = () => {
  useEffect(() => {
    const movieText = 'Harry';
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}%type=movie`)
        .catch((err) => {
          console.log('Err:', err);
        });
      console.log(response);
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
