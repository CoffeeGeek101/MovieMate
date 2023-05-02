import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import MoodSection from '../components/MoodSection'
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
  // const { state } = useLocation();
  return (
    <>
    <div className='movie-wrapper'>
      <TrendingMovie trendMovie = {trending} />
      <HeroSection trendMovie = {trending} genres={genre} />
    </div>
    <div>
      <MovieList popularMovie = {popular} genres={genre} />
      <MoodSection trendMovie= {trending} genres={genre} />
    </div>
    </>
  )
}
