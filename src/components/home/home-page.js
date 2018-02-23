import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight Administration Portal 2.0</h1>
        <p>React, Redux and React Router in ES6 for super ultra-responsive webapps</p>
        <Link to="about" className="btn btn-primary btn-lg">About US</Link>
      </div>
    );
  }
}

export default HomePage;
