import * as Types from './action-types';

import courseApi from '../api/mock-courses-api';

export function createCourse(course) {
  return {type: Types.CREATE_COURSE, course};
}

export function loadCoursesSuccess(courses) {
  return {type: Types.LOAD_COURSES_SUCCESS, courses}
}

export function loadAllCourse() {
  return function(dispatch) {
    return courseApi.getAllCourses()
      .then(courses => {dispatch(loadCoursesSuccess(courses))})
      .catch(error => {throw (error)})
  }
}
