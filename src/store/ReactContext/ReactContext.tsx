import React, { useState, createContext, useContext } from "react";

interface ReactContextProps {
  children: React.ReactNode;
}
interface ThemeSettings {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

interface MobileMenuSettings {
  isOpenMobileMenu: boolean;
  isRemoveMobileMenu: boolean;
  setIsOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRemoveMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
interface HeaderSettings {
  activeHeaderItem: string;
  setActiveHeaderItem: React.Dispatch<React.SetStateAction<string>>;
}

interface TypeContext {
  headerSettings: HeaderSettings;
  themeSettings: ThemeSettings;
  mobileMenuSettings: MobileMenuSettings;
  allSettings: {
    headerSettings: HeaderSettings;

    themeSettings: ThemeSettings;
    mobileMenuSettings: MobileMenuSettings;
  };
}

const defaultThemeSettings: ThemeSettings = {
  theme: "light",
  setTheme: () => {},
};

const defaultMobileMenuSettings: MobileMenuSettings = {
  isOpenMobileMenu: false,
  isRemoveMobileMenu: false,
  setIsRemoveMobileMenu: () => {},
  setIsOpenMobileMenu: () => {},
};
const defaultHeaderSettings: HeaderSettings = {
  activeHeaderItem: "",
  setActiveHeaderItem: () => {},
};
const StoreContext = createContext<TypeContext>({
  headerSettings: defaultHeaderSettings,
  themeSettings: defaultThemeSettings,

  mobileMenuSettings: defaultMobileMenuSettings,
  allSettings: {
    headerSettings: defaultHeaderSettings,
    themeSettings: defaultThemeSettings,
    mobileMenuSettings: defaultMobileMenuSettings,
  },
});

export const ReactContextProvider = ({ children }: ReactContextProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const [isRemoveMobileMenu, setIsRemoveMobileMenu] = useState<boolean>(true);
  const [activeHeaderItem, setActiveHeaderItem] = useState<string>("");

  const states: Omit<TypeContext, "allSettings"> = {
    themeSettings: { theme, setTheme },
    mobileMenuSettings: {
      isOpenMobileMenu,
      setIsOpenMobileMenu,
      isRemoveMobileMenu,
      setIsRemoveMobileMenu,
    },
    headerSettings: { activeHeaderItem, setActiveHeaderItem },
  };
  const globalStates: TypeContext = {
    ...states,
    allSettings: {
      themeSettings: states["themeSettings"],
      mobileMenuSettings: states["mobileMenuSettings"],
      headerSettings: states["headerSettings"],
    },
  };
  return (
    <StoreContext.Provider value={globalStates}>
      {children}
    </StoreContext.Provider>
  );
};

export const useMyContext = <K extends keyof TypeContext>(
  key: K
): TypeContext[K] => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useMyContext must be used within a ThemeProvider");
  }

  return context[key];
};
