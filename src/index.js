import React from 'react';
import ReactDOM from 'react-dom/client';

import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Main from './pages/Main';
import Discord from './pages/Discord';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#8C30FF',
      link: '#8C30FF',

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
      background: '#303030',
    },
    fonts: {
      primary: 'Raleway',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <NextThemesProvider
    defaultTheme='system'
    attribute='class'
    value={{
      light: lightTheme.className,
      dark: darkTheme.className,
    }}
  >
    <NextUIProvider>
      <Router>
        <Routes>
          {/* <Main /> */}
          <Route exact path='/' element={<Main />} />
          <Route path='/discord' element={<Discord />} />
          <Route path='/invite' element={<Discord />} />
          <Route path='/404' element={{}} />
        </Routes>
      </Router>
    </NextUIProvider>
  </NextThemesProvider>
);
