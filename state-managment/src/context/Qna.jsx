import { createContext, useState } from "react";
import { firstNext } from "../data/Data";
export const QnaContext = createContext();

export const QnaProvider = ({ children }) => {
  let [curretId, setCurrentId] = useState(firstNext[0].id);
  return (
  <QnaContext.Provider value={{firstNext, curretId, setCurrentId}}>
    {children}
  </QnaContext.Provider>
  )
};
