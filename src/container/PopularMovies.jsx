import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroSection from '../components/HeroSection'
import TrendingMovie from '../components/TrendingMovie'
import { fetchingTrendingData, resetTrending } from '../redux/TrendingSlice'
import './container.css'

export default function PopularMovies() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchingTrendingData());

    return ()=>{
      dispatch(resetTrending());
    }

  },[dispatch]);

  const {trending} = useSelector((state)=>state);
  const {genre} = useSelector((state)=>state.genre);
  // console.log(trending.results);
  // console.log(genre)

  return (
    <div className='movie-wrapper'>
      <TrendingMovie trendMovie = {trending}/>
      <HeroSection trendMovie = {trending} genres={genre}/>
    </div>
  )
}
