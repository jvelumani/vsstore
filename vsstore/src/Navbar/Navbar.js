import React, {Component} from 'react';

class navbar extends Component{

  render(){
    let menuMarkup = this.props.link.map((link, index)=> {
      return(
      <li className="nav-item" key={index}>
          <a className={"nav-link js-scroll-trigger "+ (link.active ? 'active' : '')} href="{link.links}">{link.label}</a>
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
