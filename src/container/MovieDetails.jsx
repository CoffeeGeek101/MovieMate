import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import DetailPage from '../components/DetailPage'
import { fetchingMovieDetail, resetMovieDetail } from '../redux/DetailSlice';

export default function MovieDetails() {

  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchingMovieDetail(id));

    return ()=>{
      dispatch(resetMovieDetail());
    }
  },[dispatch]);

  const movieDetail= useSelector((state)=>state.movieDetail);
  // console.log(movieDetail);

  return (
    <div>
      <DetailPage details={movieDetail}/>
    </div>
  )
}
