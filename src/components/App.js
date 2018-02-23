import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './common/header';
import HomePage from './home/home-page';
import AboutPage from './about/about-page';
import CoursesPage from './course/courses-page';

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/courses" component={CoursesPage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
