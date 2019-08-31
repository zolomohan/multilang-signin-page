import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
	state = {
		darkMode: true
	};
	render() {
		return <ThemeContext.Provider value={this.state}>{this.props.children}</ThemeContext.Provider>;
	}
}
