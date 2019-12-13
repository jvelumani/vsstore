import React, {Component} from 'react';
import './App.css';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

class App extends Component{
  render(){
    let menulinks =[
      {label:'Home', links:'http://wwww.google.com'},
      {label:'About us', links:'#'},
      {label:'Service', links:'#'},
      {label:'Store', links:'#'},
      {label:'Contact', links:'#'}
    ];
    return (
      <div className="App">
        <header className="App-header">
        <div className="container">
            <div className="row col-lg-12">
                <div className="logo col-lg-3">
                  <Logo />
                </div>
                <div className="col-lg-9">
                
                  <Navbar link={menulinks} />
                
                </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
  
}

export default App;
