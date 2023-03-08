import './index.css'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PopularMovies from './container/PopularMovies'
import MovieDetails from './container/MovieDetails'
import Layout from './components/Layout'

function App() {
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
