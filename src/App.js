import React from 'react';
import './App.css';
import Header from './components/header/header';
import HomePage from "./pages/homepage/homepage";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <HomePage></HomePage>
    </div>
  );
}

export default App;
