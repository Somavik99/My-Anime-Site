import React, { createContext, useReducer } from "react";
import "./contextApi.css";

export const PageContext = createContext();

const ContextApi = ({ children }) => {
  const [state, dispatch] = useReducer(first, second, third);
  return <PageContext.Provider value>{children}</PageContext.Provider>;
};

export default ContextApi;
