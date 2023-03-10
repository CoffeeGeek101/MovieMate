import React from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../components/SearchBar'

export default function SearchResult() {

  const {search} = useSelector((state) => state)
  const {genre} = useSelector((state)=>state.genre)
  return (
    <SearchBar movies = {search} genres = {genre} />
  )
}
