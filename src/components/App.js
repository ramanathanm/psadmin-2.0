import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './common/header';
import HomePage from './home/home-page';
import AboutPage from './about/about-page';
import CoursesPage from './course/courses-page';
import NotFoundPage from './common/not-found-page';

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/courses" component={CoursesPage}/>
          <Route path="/about" component={AboutPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
