import { GET_TECHS, ADD_TECH, TECHS_ERROR, SET_LOADING } from "./types";

// Function to get the techs from the server async
export const getTechs = () => async (dispatch) => {
  try {
    // Set the loading initially
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    // Dispatch the techs data to the reducer
    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    // Dispatch the error to the reducer
    dispatch({
      type: TECHS_ERROR,
      payload: err.message,
    });
  }
};

// Function to add a tech
export const addTech = (tech) => async (dispatch) => {
  try {
    // Set the loading initially
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tech),
    });
    const data = await res.json();

    // Dispatch the added tech to the reducer
    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    // Dispatch the error to the reducer
    dispatch({
      type: TECHS_ERROR,
      payload: err.message,
    });
  }
};

// Function to set the loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
