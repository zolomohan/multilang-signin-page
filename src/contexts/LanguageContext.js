import React, { createContext, useState } from 'react';
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
	const [ language, setLanguage ] = useState('english');
	return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
