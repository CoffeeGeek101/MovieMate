import React from 'react'
import './component.css'
import { Base_URL } from '../credConfig';
import { Star } from '@mui/icons-material';
import { runtime_formatter } from '../lib/helper';

export default function DetailPage({details}) {
  console.log(details)
  const release = details.release_date.slice(0,4);
  const rating = details.star.toFixed(1);
  return (
    <div className='detail-wrapper'>
      <div className='details' style={{backgroundImage:`url(${Base_URL}/w1280/${details.backdrop})`}}>
        <div className='detail-content'>
          <div className='detail-hero' style={{backgroundImage:`url(${Base_URL}/w1280/${details.poster})`}}>
            <div className='detail-hero-shadow'></div>
          </div>
          <div className='detail-content-doc'>
            <div className='dummy-poster-div'></div>
            <div className='detail-intro-holder'>
              <div className='detail-part-i'>
                <p className='detail-title'>{details.title}</p>
                <div className='detail-utility-intro'>
                    <div className='detail-rating'>
                      <Star className='star'/> 
                      <p className='rating-star'>{rating}</p>
                    </div>
                    <p>○</p>
                    <p className='runtime'>{runtime_formatter(details.runtime)}</p>
                    <p>○</p>
                    <div className='detail-genre-holder'>
                    {
                      details.genres.map((genre)=>(
                        <p className='detail-genre'>{genre.name}.</p>
                      ))
                    }
                    </div>
                    <p>○</p>
                    <p className='release-detail'>{release}</p>
                </div>
                <p className='detail-des'>{details.overview}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
