import React from 'react';
import profile from './images/bg.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>author: rushhourinmyheart</h2>
      <img src={profile} alt="portfolio-image"/>
    </div>
  );
}

export default App;
