// // ./context/UseDarkModeContext.js
// import React, { createContext, useContext, useState, useEffect } from "react";

// const DarkModeContext = createContext();

// export const DarkModeProvider = ({ children }) => {
//   const storedDarkMode = localStorage.getItem("isDarkMode");
//   const initialDarkMode = storedDarkMode ? JSON.parse(storedDarkMode) : false;
//   const [isDark, setIsDark] = useState(initialDarkMode);

//   useEffect(() => {
//     localStorage.setItem("isDarkMode", JSON.stringify(isDark));
//   }, [isDark]);

//   return (
//     <DarkModeContext.Provider value={{ isDark, setIsDark }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// export const useDarkModes = () => {
//   const context = useContext(DarkModeContext);
//   if (!context) {
//     throw new Error("useDarkModes must be used within a DarkModeProvider");
//   }
//   return context;
// };

import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorgeState";
const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("prefers-color-scheme: dark").matches,
    "isDarkMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");

  return context;
}

export { DarkModeProvider, useDarkMode };
