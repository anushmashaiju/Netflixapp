/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import "./Rowpost.css";
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import YouTube from 'react-youtube';
// eslint-disable-next-line no-unused-vars
import { api_key } from '../../constants/Apikey';
import { imageUrl } from '../../constants/url';
//import movieTrailer from 'movie-trailer';

const Rowpost = (props) => {
  //console.log("===props===",props);
  const [Rowpost, setRowpost] = useState([])
  const [id, setID] = useState([])
  useEffect(() => {

    axios
      .get(props.url)//for different movies
      .then((response) => {
        setRowpost(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.url]);

  const handleTrailers = (movie) => {
    axios
    .get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api_key}&language=en-US`)
      .then((response) => {
        console.log("===response===", response.data.results[0].key);
        setID(response.data.results[0].key);
      })
      .catch((error) => {
        console.log(error);

      });
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div className='Rowpost'>
      <h2 className='title'>{props.title}</h2>
      <div className='posters'>
        {Rowpost.map((movie) => {

          return (
            <img
             //key={movie.id} onClick={()=>handleTrailers(movie)}
            className={props.isSmall === true ? "small-posters" : "myposters"} 
            src={`${imageUrl + movie.backdrop_path}`} alt=""
              //condition is applied if props.issmall true then small-posters otherwise myposters; see app.js,here same component using for different format.
              onClick={() => handleTrailers(movie)}
            />
          );

        })}
      </div>
      {id && <YouTube videoId={id} opts={opts} />}
    </div>
  );
};
export default Rowpost;
