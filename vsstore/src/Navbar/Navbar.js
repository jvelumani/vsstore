import React, {Component} from 'react';

class navbar extends Component{

  render(){
    let menuMarkup = this.props.link.map((link, index)=> {
      return(
      <li className="nav-item">
          <a className="nav-link js-scroll-trigger active" href="{link.links}">{link.label}</a>
      </li>
      )
    })
   
    return (
      <ul className="navbar-nav text-uppercase ml-auto">
          {menuMarkup}
      </ul>
   )

  }
}

export default navbar;