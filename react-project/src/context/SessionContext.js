import { createContext, useState } from "react";

export const SessionContext = createContext({
  // TODO: answer here
  user: {},
  setUser: () => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const SessionProvider = ({ children }) => {
  // TODO: answer here
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    image: "",
  });

  return (
  <SessionContext.Provider 
  value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
    {children}
  </SessionContext.Provider>
  );
};
