import React from 'react';
import ReactDOM from 'react-dom/client';

import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import './styles/index.css';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#8C30FF',
      link: '#8C30FF',

      primaryBorder: '#8C30FF',
      primaryBorderHover: '#8C30FF',
      primarySolidHover: '#AF6DFF',
      primarySolidContrast: '#FFFFFF',
      primaryShadow: '#8C30FF',

      background: '#f0f0f0',
    },
    fonts: {
      primary: 'Raleway',
    },
  },
});

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#ff8df4',
      link: '#ff8df4',

      primaryBorder: '#ff8df4',
      primaryBorderHover: '#ff8df4',
      primarySolidHover: '#FFA8F6',
      primarySolidContrast: '#FFFFFF',
      primaryShadow: '#9B4C93',

      background: '#202020',
    },
    fonts: {
      primary: 'Raleway',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NextThemesProvider
    defaultTheme='dark'
    attribute='class'
    value={{
      light: lightTheme.className,
      dark: darkTheme.className,
    }}
  >
    <NextUIProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </NextUIProvider>
  </NextThemesProvider>
);
