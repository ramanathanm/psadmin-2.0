import * as Types from './action-types';

export function createCourse(currentCourse) {
  return {type: Types.CREATE_COURSE, currentCourse};
}

export function clearCourse() {
  return {type: Types.CLEAR_COURSE }
}