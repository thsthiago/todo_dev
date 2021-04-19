import React from 'react'
import GlobalStyles from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import AppProvider from './hooks'

function App () {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
