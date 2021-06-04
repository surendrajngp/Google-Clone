import React, { createContext, useContext, useReducer } from "react";

// Preparing the data layer--------------------

// Creating context
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook which allows us to pull the information from data layer
// or dispatcher for user
export const useStateValue = () => useContext(StateContext);
