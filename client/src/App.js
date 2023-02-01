import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './themes/default'

import HomePage from './pages/Home'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </ThemeProvider>
    
  )
}

export default App
