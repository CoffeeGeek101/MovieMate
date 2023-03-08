import React from 'react'
import '../index.css'
import { ThemeProvider} from '@emotion/react'
import { createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import SearchResult from '../container/SearchResult';

const appTheme = createTheme({
    palette:{
        mode : 'dark'
    }
});



export default function Layout({children}) {
  return (
    <ThemeProvider theme={appTheme}>
        <CssBaseline/>
          <div className='topbar'>
          <h1 className='main-logo'>MovieMate</h1>
          <SearchResult/>
          </div>
        {children}
    </ThemeProvider>
  )
}
