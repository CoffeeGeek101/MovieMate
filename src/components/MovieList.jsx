import { TrendingUp } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React from 'react';
import { Base_URL } from '../credConfig';
import './component.css';
import { genreData } from '../lib/helper';
import { Link } from 'react-router-dom';

export default function MovieList({popularMovie,genres}) {
  // console.log(popularMovie)
  return (
    <div className='popular-pop-wrapper'>
      <div className='popular-header'>
        <div className='popular-title'>Popcorn Worthy. &#127871;</div>
        <Link to={'/movie/more'} style={{textDecoration:'none'}}>
        <p className='more-movie-link'>See more.</p>
        </Link>
      </div>
      <div className='popular-hero-content'>
        <div className='popular-eye-catcher'>
          {
            popularMovie.results.slice(17,18).map((item)=>(
              <Link to={`/movie/${item.id}`}>
              <div className='eye-catcher' style={{backgroundImage:`url(${Base_URL}/w1280/${item.poster_path})`}}>
              </div>
              </Link>
            ))
          }
        </div>
      <div className='popular-content'>
        {
          popularMovie.results.slice(0,18).map((item)=>(
            <Link to={`movie/${item.id}`} style={{textDecoration:'none', color: '#fff'}}>
            <div key={item.id} className='content-cover' style={{backgroundImage:`url(${Base_URL}/w1280/${item.backdrop_path})`}}>
              <div className='popular-des'>
                 <p className='popular-logo'>&#127871;</p>
                 <div className='popular-movie-des'>
                    <Tooltip title={item.title}>
                    <div className='popular-movie-title'>{item.title}</div>
                    </Tooltip>
                    <div className='popular-movie-release'>
                      {
                         genreData(genres,item.genre_ids)
                      }
                    </div>
                 </div>
                 <div className='popular-movie-rating'><span>{item.vote_average.toFixed(1)}/10</span></div>
                </div>
            </div>
            </Link>
          ))
        }
      </div>
      </div>
    </div>
  )
}
