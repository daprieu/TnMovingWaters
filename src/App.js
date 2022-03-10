import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import TnMovingWatersViews from './components/TnMovingWatersViews';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TnMovingWatersViews/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
