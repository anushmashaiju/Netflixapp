import React, { useEffect, useState } from 'react';
import "./Rowpost.css";
import axios from 'axios';
import YouTube from 'react-youtube';
import { api_key } from '../../constants/Apikey';
import { imageUrl } from '../../constants/url';

const Rowpost = (props) => {
  const [Rowpost, setRowpost] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    axios
      .get(props.url)
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
        const trailer = response.data.results.find(result => result.type === "Trailer");
        if (trailer) {
          setTrailerKey(trailer.key);
          setSelectedMovie(movie);
        } else {
          console.log("Trailer not found for this movie.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
 
  return (
    <div className='Rowpost'>
      <h2 className='title'>{props.title}</h2>
      <div className='posters'>
        {Rowpost.map((movie) => (
          <img
            key={movie.id}
            className={props.isSmall === true ? "small-posters" : "myposters"}
            src={`${imageUrl + movie.backdrop_path}`} alt=""
            onClick={() => handleTrailers(movie)}
          />
        ))}
      </div>
      {selectedMovie && trailerKey && <YouTube videoId={trailerKey} opts={opts} />}
    </div>
  );
};

export default Rowpost;
