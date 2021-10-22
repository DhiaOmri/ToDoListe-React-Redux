import {
  ADD_TASK,
  COMPLETEDTSK,
  DELET_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  UPDATE_TASK,
} from "./types";

export const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

export const CompletedTask = (payload) => {
  return {
    type: COMPLETEDTSK,
    payload,
  };
};

export const deletTask = (payload) => {
  return {
    type: DELET_TASK,
    payload,
  };
};
// set current task in input
export const updateTask = (payload) => {
  return {
    type: UPDATE_TASK,
    payload,
  };
};

export const editTask = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};

export const filterTasks = (payload) => {
  return {
    type: FILTER_TASKS,
    payload,
  };
};
