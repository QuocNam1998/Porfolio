import React, { useState, createContext, useContext } from "react";

interface ReactContextProps {
  children: React.ReactNode;
}

interface TypeContext {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const StoreContext = createContext<TypeContext>({
  theme: "light",
  setTheme: () => {},
});

export const ReactContextProvider = ({ children }: ReactContextProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <StoreContext.Provider value={{ theme, setTheme }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
