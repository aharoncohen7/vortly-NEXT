
"use client";

import { createContext } from "react";

export const UserContext = createContext("");

export default function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{mood :"dark"}}>
      {children}
    </UserContext.Provider>
  );
}