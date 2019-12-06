import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '@/store/store'
import Main from '@/containers/Main'
import theme from '@/theme'
import GlobalStyles from './style'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Main />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </Router>
  )
}

export default App
