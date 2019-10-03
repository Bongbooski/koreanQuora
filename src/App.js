import React from 'react';
import './App.css';
import Background from './components/background.js';
import LeftSideBar from './components/leftSidebar';


function App() {
  return (
    <div className="App">
      <Background />
      <LeftSideBar />
    </div>
  );
}

export default App;
