import React from 'react';
import Header from "./components/Header"
import Main from "./pages/main";
import Routes from './routes';
import "./style.css";
const App = () =>(
  <div className='div'>
    <Header/>
    <Routes/>
  </div>

);


export default App;
