import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroSection from '../components/HeroSection'
import MovieList from '../components/MovieList'
import TrendingMovie from '../components/TrendingMovie'
import { fetchingPopularMovieData, resetPopularData } from '../redux/PopularSlice'
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
  const {popular} = useSelector((state)=>state);
  // console.log(popular)

  return (
    <>
    <div className='movie-wrapper'>
      <TrendingMovie trendMovie = {trending}/>
      <HeroSection trendMovie = {trending} genres={genre}/>
    </div>
    <div>
      <MovieList popularMovie = {popular} genres={genre}/>
    </div>
    </>
  )
}
