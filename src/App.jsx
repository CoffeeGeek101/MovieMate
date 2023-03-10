import './index.css'
import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PopularMovies from './container/PopularMovies'
import MovieDetails from './container/MovieDetails'
import Layout from './components/Layout'
import { useDispatch } from 'react-redux'
import { fetchingGenre } from './redux/GenreSlice'

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchingGenre());
  },[dispatch]);

  return (
    <div className='App'>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<PopularMovies/>} />
          <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
    </div>
  )
}

export default App
