import {
  GET_LOGS,
  LOGS_ERROR,
  ADD_LOG,
  EDIT_LOG,
  DELETE_LOG,
  SEARCH_LOG,
  CURRENT_LOG,
  CLEAR_CURRENT,
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

// Function to edit/update the log from the server
export const editLog = (log) => async (dispatch) => {
  try {
    // Set the loading initially
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(log),
    });
    const data = await res.json();

    // Dispatch the updated log data to the reducer
    dispatch({
      type: EDIT_LOG,
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

// Function to search a log
export const searchLog = (keyword) => async (dispatch) => {
  try {
    // Set the loading initially
    setLoading();

    const res = await fetch(`/logs?q=${keyword}`);
    const data = await res.json();

    // Dispatch the search results to the reducer
    dispatch({
      type: SEARCH_LOG,
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

// Function to set the current log to the state
export const setCurrentLog = (log) => {
  // Simply return the type and payload as it is not async function
  return {
    type: CURRENT_LOG,
    payload: log,
  };
};

// Function to clear the current log
export const clearCurrentLog = () => {
  // Simply return the type as it is not async function
  return {
    type: CLEAR_CURRENT,
  };
};

// Function to set the loading
export const setLoading = () => {
  // Simply return the type as it is not async function
  return {
    type: SET_LOADING,
  };
};
