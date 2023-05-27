import { createContext, useState } from "react";

export const TodoContext = createContext();

const ContextProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  const value = { listState: [lists, setLists] };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default ContextProvider;
