import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

export default function Page({ children }) {
	const { darkMode } = useContext(ThemeContext);
	const styles = {
		backgroundColor : darkMode ? '#222' : '#ececec',
		height          : '100vh',
		width           : '100vw'
	};
	return <div style={styles}>{children}</div>;
}
