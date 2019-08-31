import React, { Component, createContext } from 'react';

const ThemeContext = createContext();

export default class ThemeProvider extends Component {
	state = {
		darkMode: true
	};
	render() {
		return <ThemeContext.Provider value={this.sta}>{this.props.children}</ThemeContext.Provider>;
	}
}
