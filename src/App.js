import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import Main from './Componets/Main';
import HeroSection from './Componets/HeroSection';
import CoursesPage from './Componets/CoursesPage';
import Home from './Componets/Home';
import Route from './Route';
import CoursorGlowEffect from './CursorGlowEffect';

import React, { useEffect, useState } from "react";
// import "./CursorGlowEffect.css";
function App() {


  


  return (
    <div>
      <div >
  <Route/>
  {/* <CoursorGlowEffect /> */}


  </div>
>>>>>>> 230bbfc (first commit)
    </div>
  );
}

export default App;
