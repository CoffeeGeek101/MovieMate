import { Search } from '@mui/icons-material'
import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchingSearch, resetSearchData } from '../redux/SearchSlice'

export default function SearchBar() {

const dispatch = useDispatch();

const handleSearch = (e) =>{
    if(!e.target.value){
        return;
    }
    dispatch(fetchingSearch(e.target.value));
}
  return (
    <div>
        <TextField
        placeholder='search'
        sx={{ height: '10px', minWidth:'600px', margin:'-10px'}}
        size='small'
        focused={false}
        InputProps={{
            endAdornment: <InputAdornment position='end'><Search/></InputAdornment>,
            onChange : handleSearch,
        }}
        />
    </div>
  )
}
