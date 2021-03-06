import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_TECH_DELETE,
  REMOVE_TECH_DELETE,
  TECHS_ERROR,
  SET_LOADING,
} from "./types";

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
      payload: data.tech,
    });
  } catch (err) {
    // Dispatch the error to the reducer
    dispatch({
      type: TECHS_ERROR,
      payload: err.message,
    });
  }
};

// Function to set the deletion state of a tech
export const setTechDelete = () => {
  return {
    type: SET_TECH_DELETE,
  };
};

// Function to remove the deletion state of a tech
export const removeTechDelete = () => {
  return {
    type: REMOVE_TECH_DELETE,
  };
};

// Function to delete a tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    // Set the loading initially
    setLoading();

    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    // Dispatch the id to the reducer
    dispatch({
      type: DELETE_TECH,
      payload: id,
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
