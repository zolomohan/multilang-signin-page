import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Page from './Page';
import {ThemeProvider} from './contexts/ThemeContext';

class App extends Component {
	render() {
		return (
			<ThemeProvider>
				<Page>
					<Navbar />
					<Form />
				</Page>
			</ThemeProvider>
		);
	}
}

export default App;
