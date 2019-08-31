import React, { Component } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
export default class Page extends Component {
	static contextType = ThemeContext;
	render() {
		console.log(this.context.darkMode)
		return (
			<div
				style={{
					backgroundColor : this.context.darkMode ? '#222' : '#ececec',
					height          : '100vh',
					width           : '100%'
				}}
			>
				{this.props.children}
			</div>
		);
	}
}
