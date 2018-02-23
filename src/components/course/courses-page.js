import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PropTypes} from 'prop-types';

import * as courseActions from '../../actions/course-actions';

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.onClickSave = this.onClickSave.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);

    this.state = {
      currentCourse: {
        title: ""
      },
      courses: []
    }
  }

  onTitleChange(event) {
    const course = this.state.currentCourse;
    course.title = event.target.value;
    this.setState({currentCourse: course});
  }

  onClickSave(event) {
    console.log("onClickSave ", this.state);
    this.props.actions.createCourse(this.state.currentCourse);
    // this.props.actions.clearCourse();
  }

  createCourseRow(course, index) {
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.createCourseRow)}
        <h2>Add Course</h2>

        <input type="text"
               value={this.state.currentCourse.title}
               onChange={this.onTitleChange}
               ref="titleInputbox"/>

        <input type="submit"
               value="Save"
               onClick={this.onClickSave}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  debugger
  return {
    courses: state.courseState.courses
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)