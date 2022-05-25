import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AnimatedRoute from './components/AnimatedRoute';

import { NextUIProvider, createTheme } from '@nextui-org/react';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#00bcd4',
      secondary: '#ff9800',
      background: '#212121',
      text: '#ffffff',
      border: '#424242',
      borderHover: '#616161',
      borderActive: '#00bcd4',
      borderDisabled: '#424242',
      borderFocused: '#00bcd4',
      borderHovered: '#616161',
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
    <NextUIProvider theme={darkTheme}>
      <AnimatedRoute />
    </NextUIProvider>
  </Router>
);
