import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoute from './components/AnimatedRoute';

import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff57ff',
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
