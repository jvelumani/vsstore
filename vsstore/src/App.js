import React from 'react';
import './App.css';
import Logo from './Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
          <div className="row col-lg-12">
              <div className="logo col-lg-3">
                <Logo />
              </div>
              <div className="col-lg-9">
                <p>Navigation</p>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
