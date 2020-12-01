import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <NavLink className='navbar-brand' to='/'>
          React
        </NavLink>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/' activeClassName='active' exact>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              className='nav-link'
              to='/features'
              activeClassName='active'
            >
              Features
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              className='nav-link'
              to='/pricing'
              activeClassName='active'
            >
              Pricing
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
