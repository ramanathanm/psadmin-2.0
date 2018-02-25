import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';

import * as courseActions from '../../actions/course-actions';

class ManageCoursePage extends Component {
  render() {
    return (
      <div>Manage Course Page</div>
    );
  }
}

ManageCoursePage.propTypes = {};

function mapStateToProps(state, ownProps) {
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage));
