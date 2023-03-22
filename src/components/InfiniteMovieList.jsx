import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedMovieGenre } from '../redux/SetGenreSlice';
import { fetchingMovieByGenre, resetFetchingByGenre } from '../redux/MovieByGenreSlice'
import { Base_URL } from '../credConfig';
import './component.css'
import { KeyboardDoubleArrowRight } from '@mui/icons-material';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
 

export default function InfiniteMovieList() {

  const dispatch = useDispatch();
  const dispatch_moviebyGenre = useDispatch();

  const {genre} = useSelector((state)=>state.genre);
  const selectedGenre = useSelector((state)=>state.selectedGenre);
  const {movieByGenre} = useSelector((state)=>state);
  // console.log(movieByGenre)

  const [selectGenre, setSelectGenre] = useState('');
  const [isWatching, setIsWatching] = useState(null);
  const [isOverlay, setIsOverlay] = useState(null);

  const handleGenre = (genre) =>{
    const selectedGenres = genre.id;
    setSelectGenre(genre.name);
    setIsWatching(genre.id);
    dispatch(selectedMovieGenre(selectedGenres));
  }

  useEffect(()=>{
    if(selectedGenre){
      // console.log(selectedGenre)
      dispatch_moviebyGenre(fetchingMovieByGenre({selectedGenre : selectedGenre, page : 1}))
    }
    return () =>{
      dispatch_moviebyGenre(resetFetchingByGenre());
    }
  },[dispatch_moviebyGenre, selectedGenre])



  const loadMore = () => {
    if (movieByGenre.page < 20) {
      // console.log(movieByGenre.hasMore)
     dispatch_moviebyGenre(fetchingMovieByGenre({selectedGenre : selectedGenre, page : movieByGenre.page + 1}))
    }
  };

  useEffect(()=>{
    if(movieByGenre.page < 20){
      loadMore();
    }
  },[movieByGenre.page])

  return (
    <div className='infinite-movie-wrapper'>
      <div className='genre-holder' style={{display:'flex', gap:'20px'}}>
        {
          genre.map((genre)=>(
            <div className={`genres ${isWatching === genre.id ? 'active-genre' : ''}`} 
            key={genre.id} 
            onClick={()=> handleGenre(genre)}
            >
              <p className='genre-text-wrapper'>{isWatching === genre.id && <KeyboardDoubleArrowRight/>} {genre.name}</p>
            </div>
          ))
        }
      </div>
    
      <div className='infinite-movie-holder'>
      <InfiniteScroll
        dataLength={movieByGenre.totalResult}
        next={loadMore}
        hasMore={movieByGenre.hasMore}
        loader={<Loader/>}
        className="scroll"
      >
      {
        movieByGenre.results.map((item)=>(
          <div 
          key={item.id} 
          className='infinite-movie' 
          style={{backgroundImage:`url(${Base_URL}/w1280/${item.poster_path})`}}
          onMouseEnter={()=>setIsOverlay(item.id)}
          onMouseLeave={()=>setIsOverlay(null)}
          >
            <div 
            className={`overlay ${isOverlay === item.id ? 'active-overlay' : ''}`}
            >
              <button className='get-more-details'>Get Details</button>
            </div>
          </div>
        ))
      }
        </InfiniteScroll>
      </div>
    </div>
  )
}
