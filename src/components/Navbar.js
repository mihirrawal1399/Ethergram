import React, { Component } from 'react';
import Identicon from 'identicon.js';
import photo from '../photo.png'
import './Main.css';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar fixed-top flex-md-nowrap p-1">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="./"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={photo} width="30" height="30" className="logo1 d-inline-block align-top" alt="" />
          &nbsp;Ethergram
          </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className="text-light">
                <small id="account">{this.props.account}</small>
              </small>
              { this.props.account
                ? <img
                  className='ml-2'
                  width='30'
                  height='30'
                  alt='Account'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                  />
                : <span></span>
              }
            </li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;