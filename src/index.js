import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Messenger from './routes/Messenger'
import ProfileInfo from './routes/ProfileInfo'
import Chat0 from './routes/Chat0'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App/> }>
          <Route path='/' element={<Main/>} />
          <Route path='/profileInfo/:user_name' element={<ProfileInfo />} />
          <Route path='/messenger' element={<Messenger/>}>
            {/* <Route path='/chat0' element={<Chat0/>}/> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);