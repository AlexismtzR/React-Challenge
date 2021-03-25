import React from 'react'
import './App.css';
import { Provider } from 'react-redux'
import {store} from './redux/store'
import Social from './components/Social';

function App() {
  return (
    <Provider store={store}>
      <div style={{margin: 0, display:"flex", justifyContent:"center", marginTop:20}}>
        <Social />
      </div>
    </Provider>
  )
}

export default App;
