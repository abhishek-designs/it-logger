import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_TECH_DELETE,
  REMOVE_TECH_DELETE,
  TECHS_ERROR,
  SET_LOADING,
} from "../actions/types";

// Initial techs state
const initialState = {
  techs: null,
  isDeleting: false,
  loading: false,
  error: null,
};

// State manipulation
const techReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech._id !== action.payload),
        loading: false,
      };
    case SET_TECH_DELETE:
      return {
        ...state,
        isDeleting: true,
      };
    case REMOVE_TECH_DELETE:
      return {
        ...state,
        isDeleting: false,
      };
    case TECHS_ERROR:
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

export default techReducer;
