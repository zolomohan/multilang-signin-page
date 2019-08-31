import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
	state = {
		language : 'en'
	};

	changeLanguage = (newLanguage) => this.setState({ language: newLanguage });

	render() {
		return (
			<LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
				{this.props.children}
			</LanguageContext.Provider>
		);
	}
}
