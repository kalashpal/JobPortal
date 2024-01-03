import React, { createContext, useContext, useReducer } from "react";

// Create a context
const JobContext = createContext();

// Define a reducer function to handle actions
const jobReducer = (state, action) => {
  switch (action.type) {
    case "ADD_JOB":
      return [...state, action.payload];
    case "DELETE_JOB":
      return state.filter((job) => job.id !== action.payload);
    default:
      return state;
  }
};

// Creat`e a provider component
const JobProvider = ({ children }) => {
  const [jobs, dispatch] = useReducer(jobReducer, []);

  // Add a job to the state
  const addJob = (job) => {
    dispatch({ type: "ADD_JOB", payload: job });
  };

  // Delete a job from the state
  const deleteJob = (jobId) => {
    dispatch({ type: "DELETE_JOB", payload: jobId });
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};

// Create a custom hook for using the context
const useJobContext = () => {
  return useContext(JobContext);
};

export { JobProvider, useJobContext };
