import React from 'react';
import { Counter } from './features/counter/Counter';
import NavBar from './features/navbar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;
