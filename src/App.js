import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Page from './Page';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<Page>
					<Navbar />
					<Form />
				</Page>
			</LanguageProvider>
		</ThemeProvider>
	);
}
