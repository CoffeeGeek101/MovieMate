import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import DetailPage from '../components/DetailPage'
import { fetchingActorsData,resetActorsData } from '../redux/ActorSlice';
import { fetchingMovieDetail, resetMovieDetail } from '../redux/DetailSlice';

export default function MovieDetails() {

  const {id} = useParams();
  const dispatch = useDispatch();
  const dispatchActors = useDispatch();

  useEffect(()=>{
    dispatch(fetchingMovieDetail(id));

    return ()=>{
      dispatch(resetMovieDetail());
    }
  },[dispatch]);

  useEffect(()=>{
    dispatchActors(fetchingActorsData(id));

    return () =>{
      dispatch(resetActorsData());
    }
  },[dispatchActors])

  const movieDetail= useSelector((state)=>state.movieDetail);
  // console.log(movieDetail);
  const actor = useSelector((state)=>state.actors);
  // console.log(actor)

  return (
    <div>
      <DetailPage details={movieDetail} actorlist={actor}/>
    </div>
  )
}
