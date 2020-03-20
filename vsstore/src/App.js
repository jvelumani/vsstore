import React, {Component} from 'react';


import Nav from './Components/Nav';
import HomeSlider from './Components/HomeSlider';
import About from './Components/About';

class App extends Component{
  render(){

    return (
      <div className="App">
        <Nav />
        <HomeSlider />
        <About />
      </div>
    );
  }

}

export default App;
