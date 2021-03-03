import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  LOGS_ERROR,
  SET_LOADING,
} from "../actions/types";

// Set the initial log state
const initialState = {
  logs: null,
  loading: false,
  error: null,
};

// Manipulating states
const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default logReducer;
