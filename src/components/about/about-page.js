import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

import AboutIdPage from './about-id-page';

class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>This application uses React, Redux & React-Router along w/ other various libraries</p>

        <Link to={`/about/123`}>AboutIdPage</Link>
        <Route path="/about/:id" component={AboutIdPage}/>
      </div>
    );
  }
}

export default AboutPage;