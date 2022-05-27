import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

import AnimatedRoute from './components/AnimatedRoute';

import './styles/index.css';

import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffd5fb',
      dark: '#ff8df4',
    },
  },
});

/* 
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig); 
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <AnimatedRoute />
      </ThemeProvider>
    </StyledEngineProvider>
  </Router>
);
