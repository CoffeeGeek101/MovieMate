import { Search } from '@mui/icons-material'
import { Box, TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchingSearch} from '../redux/SearchSlice'
import Downshift from 'downshift'
import './component.css';
import {Base_URL} from '../credConfig';
import { genreData } from '../lib/helper'
import { Link } from 'react-router-dom'
// import { genreData } from '../lib/helper'

// This component will dispatch all the action or the additional options(payload) for search to the reducer.
export default function SearchBar({movies, genres}) {
// This will dispatch the payload, it is a react-redux hook
const dispatch = useDispatch();

// This is the logic that handle the payload / the input written by the user
const handleSearch = (e) =>{
    // this handles if there is no payload just return
    if(!e.target.value){  
        return;
    }
    // this dispatches the `fetchingSearch` reducer, generally this doesn't need any argument, as there is no 
    // payload for this reducer, but we are using this to watch on the `fetchedSearchData` reducer to trigger, 
    // so, we need to pass the event value to give the payload to the `fetchedSearchData` reducer.
    dispatch(fetchingSearch(e.target.value));
    if (e.key === 'Enter' || e.type === 'submit') {
      // reload the page
      window.location.reload();
    }
}
  return (
    <Downshift onSelect={() => window.location.reload()}>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        highlightedIndex,
        selectedItem,
        inputValue,
      })=> 
      <div className='search-holder'>
      <TextField
      placeholder='search'
      sx={{ height: '10px', minWidth:'600px', margin:'-10px'}}
      size='small'
      focused={false}
      // endAdorment just help us add suffix for the input component
      InputProps={{
          ...getInputProps({
            endAdornment: <InputAdornment position='end'><Search/></InputAdornment>,
            onChange : handleSearch,
          })
      }}
      /> 

      {
        isOpen ? 

        (
        <div className='search-menu' {...getMenuProps()}>
          <div className='cover'></div>
          <div className='search-item-wrapper'>
          {
              movies.result
              .slice(0,10)
              .filter((item)=> 
                !inputValue ||
                item.title.toLowerCase().includes(inputValue.toLowerCase())
              ).map((item,index)=>(
                <Link to={`/movie/${item.id}`} style={{textDecoration:'none', color:'#fff'}}>
                <div className='search-items-container' {...getItemProps({
                  item : '',
                  key : item.id,
                  selected : highlightedIndex === index,
                })}>
                  <div className='search-item'>
                      <img src={`${Base_URL}/w500${item.poster_path}`} className='search-poster'/>
                      <div className='search-detail'>
                          <div className='search-detail-des'>
                              <p className='search-heading'>{item.title}</p>
                              <p className='search-date'>{item.release_date.substring(0,4)}</p>
                          </div>
                          <div className='search-genre'>
                            {
                              genreData(genres,item.genre_ids)
                            }
                          </div>
                      </div>
                  </div>
                </div>
                </Link>
              )
              )
              
          }
            </div>
          </div>
          ) :
        null
      }  

      </div>
      }
    </Downshift>
  )
}
