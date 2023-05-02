import './index.css'
import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PopularMovies from './container/PopularMovies'
import MovieDetails from './container/MovieDetails'
import Layout from './components/Layout'
import { useDispatch } from 'react-redux'
import { fetchingGenre } from './redux/GenreSlice'
import InfiniteMovie from './container/InfiniteMovie'
import { fetchingPopularMovieData, resetPopularData } from './redux/PopularSlice'
// import ScrollRestoration from './ScrollManagement'







function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchingGenre());
  },[dispatch]);

  const dispatch_popular = useDispatch();

  useEffect(()=>{
    dispatch_popular(fetchingPopularMovieData());

    return ()=>{
      dispatch(resetPopularData());
    }
  },[dispatch_popular]);

  return (
    <div className='App'>
    <BrowserRouter>
    {/* <ScrollRestoration> */}
      <Layout>
        <Routes>
          <Route path='/' element={<PopularMovies/>} />
          <Route path='/movie/:id' element={<MovieDetails/>}/>
          <Route path='/movie/more' element={<InfiniteMovie/>}/>
        </Routes>
      </Layout>
      {/* </ScrollRestoration> */}
    </BrowserRouter>
    </div>
  )
}

export default App
