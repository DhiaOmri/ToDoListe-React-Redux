import { faPause } from "@fortawesome/free-solid-svg-icons";
import {
  ADD_TASK,
  COMPLETEDTSK,
  DELET_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  UPDATE_TASK,
} from "../Actions/types";

const initiialState = {
  todos: [],
  current: null,
  filtredTasks:[],
};

const Reducer = (state = initiialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case COMPLETEDTSK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case DELET_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    case UPDATE_TASK:
      return {
        ...state,
        current: payload,
      };
    case EDIT_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload.id
            ? { ...todo, task_descrp: payload.task_descrp }
            : todo
        ),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filtredTasks:
          payload.toLowerCase() === "completed"? 
          state.todos.filter((todo) => todo.completed)
          :payload.toLowerCase() === "not_completed"? 
          state.todos.filter((todo) => !todo.completed)
          :state.todos ,
      };
    default:
      return state;
  }
};

export default Reducer;
