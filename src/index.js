import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  createTheme,
  NextUIProvider,
  getDocumentTheme,
  changeTheme,
} from '@nextui-org/react';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#ff66ff',
      secondary: '#6685FF',

      background: '#121212',
      backgroundSecondary: '#1a1a1a',

      text: '#fff',
      textSecondary: '#fff',

      primaryShadow: '#ff66ff',
      secondaryShadow: '#6685FF',

      primaryInput: '#ffffff',
      secondaryInput: '#ffffff',

      primaryBorder: '#ff66ff',
      secondaryBorder: '#6685FF',

      primaryLightContrast: '#ffffff',
      secondaryLightContrast: '#ffffff',
    },
    zIndices: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      max: '9999',
    },
  },
});

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#ff66ff',
      secondary: '#6685FF',

      background: '#121212',
      backgroundSecondary: '#1a1a1a',

      text: '#fff',
      textSecondary: '#fff',

      primaryShadow: '#ff66ff',
      secondaryShadow: '#6685FF',

      primaryInput: '#ffffff',
      secondaryInput: '#ffffff',

      primaryBorder: '#ff66ff',
      secondaryBorder: '#6685FF',

      primaryLightContrast: '#ffffff',
      secondaryLightContrast: '#ffffff',
    },
  },
});

const Main = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // you can use any storage
    const theme = localStorage.getItem('data-theme');
    changeTheme(theme);
    setIsDark(theme === 'dark');

    const observer = new MutationObserver((mutation) => {
      const newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === 'dark');
    });

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'style'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <NextUIProvider theme={isDark ? lightTheme : darkTheme}>
      <App />
    </NextUIProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Main />
  </Router>
);
