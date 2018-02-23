import * as Types from '../actions/action-types';

export default function courseReducer(state = {currentCourse: {title: ""}, courses:[]}, action) {
  let clonedState;
  switch (action.type) {
    case Types.CREATE_COURSE:
      console.log(`state `, state, ` action `, action);
      clonedState = Object.assign({}, state,
        Object.assign({}, {courses: [...state.courses, action.currentCourse]}));

      clonedState.currentCourse = {title: ''};
      console.log(`After cloning state `, clonedState);
      return clonedState;

    // case Types.CLEAR_COURSE:
    //   clonedState = [...state, Object.assign({}, {course:{title: ""}})];
    //   return clonedState;

    default:
      return state;
  }
}