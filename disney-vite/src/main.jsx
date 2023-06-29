import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import { Details } from './pages/Details'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <Details /> */}
      {/* <Home /> */}
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
