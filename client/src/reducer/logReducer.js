import {
  GET_LOGS,
  ADD_LOG,
  EDIT_LOG,
  DELETE_LOG,
  SEARCH_LOG,
  REMOVE_SEARCH,
  LOGS_ERROR,
  CURRENT_LOG,
  CLEAR_CURRENT,
  SET_LOADING,
} from "../actions/types";

// Set the initial log state
const initialState = {
  logs: null,
  searchedLog: null,
  loading: false,
  current: null,
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
    case EDIT_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log._id === action.payload._id ? action.payload : log
        ),
        current: null,
        loading: false,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log._id !== action.payload),
        loading: false,
      };
    case SEARCH_LOG:
      return {
        ...state,
        searchedLog: state.logs.filter((log) =>
          log.message.toLowerCase().includes(action.payload)
        ),
      };
    case REMOVE_SEARCH:
      return {
        ...state,
        searchedLog: null,
      };
    case CURRENT_LOG:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
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
