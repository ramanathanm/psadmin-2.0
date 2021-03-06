import * as Types from '../actions/action-types';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case Types.CREATE_COURSE:
      return [...state, Object.assign({}, action.course)];

    case Types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
};

