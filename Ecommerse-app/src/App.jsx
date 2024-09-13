import React from 'react'
import Routerconfig from './config/router/Routerconfig'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './config/redux/store/store'


const App = () => {
  return (
    <Provider store={store}>

      <Routerconfig/>
    </Provider>
  )
}

export default App