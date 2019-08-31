import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [ darkMode, setDarkMode ] = useState(false);
	const toggleTheme = () => setDarkMode(!darkMode);
	return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}
