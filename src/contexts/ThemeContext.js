import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
	const [ darkMode, toggleTheme ] = useToggleState(false);
	return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
}
