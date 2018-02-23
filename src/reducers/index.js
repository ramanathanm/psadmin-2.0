import {combineReducers} from 'redux';

import courseState from './course-reducer';

const rootReducer = combineReducers({
  courseState
});


export default rootReducer;
