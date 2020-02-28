import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';

let menulinks =[
  {label:'Home', links:'http://wwww.google.com'},
  {label:'About us', links:'#'},
  {label:'Service', links:'#'},
  {label:'Store', links:'#'},
  {label:'Contact', links:'#'}
];
export default () => (
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
);
