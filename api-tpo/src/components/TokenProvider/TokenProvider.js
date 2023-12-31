import { useState, createContext, useEffect } from "react";

export const TokenContext = createContext();


export default function TokenProvider({ children }) {
  const [token, setToken] = useState(null);

    return (
      <TokenContext.Provider value={{ token, setToken }}>
        {children}
      </TokenContext.Provider>
    );
  }