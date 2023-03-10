import React from 'react'
import '../index.css'
import { ThemeProvider} from '@emotion/react'
import { createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import SearchResult from '../container/SearchResult';


// This is a theme or we can see it as a templet for the UI, which helps it make consist over the routing pages 
const appTheme = createTheme({
    palette:{
        mode : 'dark'
    }
});


// This LAYOUT component wraps the other components, that's why we have passed `children` as it's parameter.
// the ThemeProvider is wrapper as it works on react context concepts in order to give the value to it's children
// CSSBasline to give general css settings
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
