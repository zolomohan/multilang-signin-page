import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
	state = {
		darkMode : false
	};
	toggleTheme = () => this.setState({ darkMode: !this.state.darkMode });
	render() {
		return <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>{this.props.children}</ThemeContext.Provider>;
	}
}
