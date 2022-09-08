import React from 'react';
import ReactDOM from 'react-dom/client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import './styles/index.css';
import Router from './handlers/Router';
import { BrowserRouter } from 'react-router-dom';

import darkTheme from './themes/dark';
import lightTheme from './themes/light';

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
