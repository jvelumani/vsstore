import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';

let menulinks =[
  {label:'Home', links:'http://wwww.google.com', active:true},
  {label:'About us', links:'#'},
  {label:'Service', links:'#'},
  {label:'Portfolio', links:'#'},
  {label:'Testimonials', links:'#'},
  {label:'Contact Us', links:'#'}
];
export default () => (
    <header className="App-header">
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
        <div className="row col-lg-12">
            <div className="logo col-lg-3">
              <Logo />
            </div>
            <div className="col-lg-9">
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <Navbar link={menulinks} />
                </div>
            </div>
        </div>
      </div>
      </nav>
    </header>
);
