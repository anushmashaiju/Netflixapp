import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import axios from '../../constants/Axios';
import './Banner.css'
//import {api_key} from '../../constants/api';
import { imageUrl, trending } from '../../constants/url';

function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`${trending}`)
      .then((response) => {
        setMovies(response.data.results[1])
        //console.log("=====response=====",response);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);
  //console.log("====movies====",movies);

  return (
    <div style={{ backgroundImage: `url(${movies ? imageUrl + movies.backdrop_path : ""})`, }} className='banner'>
      <div className='content'>
        <h1 className='title'>{movies.length !== 0 ? movies.title : ""}</h1>
        <div className='banner_buttons'></div>
        <button className='button'>Play</button>
        <button className='button'>My list</button>
        <div className='intro'>
          {movies.length !== 0 ? movies.overview : ""}
        </div>
        <div className='fade_bottom'></div>
      </div>
    </div>
  )
}

export default Banner
