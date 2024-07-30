import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    const toggle = () => {
        setIsDark((prevMode) => !prevMode);
    }

    return (
        <ThemeContext.Provider value={{isDark, toggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    return useContext(ThemeContext);
}

export { useTheme, ThemeProvider} 