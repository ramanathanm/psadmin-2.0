import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="nav">
      <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
      <NavLink exact to="/courses" className="nav-link" activeClassName="active">Courses</NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="active"> About</NavLink>
    </nav>
  );
}

export default Header;