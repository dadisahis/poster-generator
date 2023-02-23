import React, { createContext, useReducer } from "react";

export const INITIAL_STATE = {
  newsType: "",
  title: "",
  authorName: "",
  authorImage: "",
  themeImage: "",
  colors: [],
};

export const posterContext = createContext(INITIAL_STATE);

const PosterReducer = (state, action) => {
  switch (action.type) {
    case "set_poster_obj":
      return action.payload;
    default:
      return state;
  }
};

export const PosterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PosterReducer, INITIAL_STATE);
  return (
    <posterContext.Provider value={{ state, dispatch }}>
      {children}
    </posterContext.Provider>
  );
};
