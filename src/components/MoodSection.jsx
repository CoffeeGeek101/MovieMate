import React from 'react'
import { Link } from 'react-router-dom'
import { Base_URL } from '../credConfig'

export default function MoodSection({trendMovie, genres}) {
    // console.log(trendMovie)
    // console.log(genres)
  return (
    <div className='mood-wrapper'>
        <p className='mood-tag-line'>What's your mood like today? &#128064;</p>
        <div className='mood'>
            {
                trendMovie.results.slice(9,10).map((item)=>(
                    <div className='mood-hero' style={{backgroundImage:`url(${Base_URL}/w1280/${item.backdrop_path})`}}>
                    <div className='mood-holders'>
                    {
                        genres.slice(0,8).map((genre)=>(
                            <div className='mood-genres'>
                                {genre.name}
                            </div>
                        ))
                    }
                    </div>
                    </div>
                ))
            }
            <div className='mood-content'>
                <p className='mood-title'>Match your <span>Mood </span>with Genres.</p>
                <Link to={{pathname:'/movie/more', state : {scrollTop: 0}}}>
                <button className='mood-btn'>Explore</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
