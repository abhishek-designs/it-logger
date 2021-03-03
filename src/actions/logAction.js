import {
  GET_LOGS,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_LOADING,
} from "./types";

// Function to get the logs from the server asynchronously
export const getLogs = () => async (dispatch) => {
  // Set the loading initially
  setLoading();

  try {
    const res = await fetch("/logs");
    const data = await res.json();

    // Dispatch the data to the reducer
    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    // Dispatch the error to the reducer
    dispatch({
      type: LOGS_ERROR,
      payload: err.message,
    });
  }
};

// Function add a log
export const addLog = (log) => async (dispatch) => {
  try {
    // Set the loading initially
    setLoading();

    const res = await fetch("/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(log),
    });

    const data = await res.json();

    // Dispatch the new added log to the reducer
    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    // Dispatch the error to the reducer
    dispatch({
      type: LOGS_ERROR,
      payload: err.message,
    });
  }
};

// Function to delete the log item from the server
export const deleteLog = (id) => async (dispatch) => {
  try {
    // Set the loading initially
    setLoading();

    await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    // Dispatch the log id to the reducer after deletion
    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    // Dispatch the error to the reducer
    dispatch({
      type: LOGS_ERROR,
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
