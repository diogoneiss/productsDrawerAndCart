import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { BrowserRouter } from "react-router-dom";
import ReduxWrapper from "./Store";
import Routes from "./Routes";

//import Header from "./Components/Header/Navbar";
//import Footer from "./Components/Footer";
//import './App.css';

function App() {
  return (
    <ReduxWrapper>
  
       <BrowserRouter>
         
          <Routes />
         
       </BrowserRouter>
   
 </ReduxWrapper>
  );
}

export default App;
