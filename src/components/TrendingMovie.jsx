// import React, { useEffect } from 'react'
import './component.css'
import { API_KEY, Base_URL } from '../credConfig'
import { TrendingUp } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchingWatchProvider, resetWatchProvider } from '../redux/WatchProviderSlice'

export default function TrendingMovie({trendMovie}) {

  console.log(trendMovie.results)

  return (
    <div className='trending-wrapper'>
      <div className='trending-content'>
        <div className='trending-head'>
          <p className='trending-head-txt'>Trending Today. &#128293;</p>
        </div>
        <div className='trending-movie-holder'>
          {
            trendMovie.results.slice(0,11)
            .map((item)=>(
              <div className='trending-movie' key={item.id} style={{backgroundImage:`url(${Base_URL}/w1280/${item.backdrop_path})`}}>
                <div className='trending-des'>
                 <TrendingUp className='trending-logo'/>
                 <div className='trending-movie-des'>
                    <Tooltip title={item.title}>
                    <div className='trending-movie-title'>{item.title}</div>
                    </Tooltip>
                    <p className='trending-movie-release'>{item.release_date.substring(0,4)}</p>
                 </div>
                 <div className='trending-movie-rating'><span>{item.vote_average.toFixed(1)}/10</span></div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
