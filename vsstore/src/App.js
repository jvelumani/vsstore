import React, {Component} from 'react';
import './App.css';

import Nav from './Components/Nav';
import HomeSlider from './Components/HomeSlider';

class App extends Component{
  render(){

    return (
      <div className="App">
        <Nav />
        <HomeSlider />

      </div>
    );
  }

}

export default App;
