import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Mobilein from './Mobilein.jsx'
import Quote from './Quote.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Mobilein />
    <Quote/>
  </React.StrictMode>,
)
