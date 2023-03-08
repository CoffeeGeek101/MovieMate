import { Search } from '@mui/icons-material'
import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import React from 'react'

export default function SearchBar() {
  return (
    <div>
        <TextField
        placeholder='search'
        sx={{ height: '10px', minWidth:'600px', margin:'-10px'}}
        size='small'
        InputProps={{
            endAdornment: <InputAdornment position='end'><Search/></InputAdornment>
        }}
        />
    </div>
  )
}
