import React from 'react';

import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Discord from '../pages/Discord';
import Timeline from '../pages/Timeline';

export const pages = [
  {
    exact: true,
    visible: true,
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    exact: false,
    visible: true,
    name: 'About',
    path: '/about',
    element: <About />,
  },
  {
    exact: false,
    visible: false,
    name: 'Discord',
    path: '/invite',
    element: <Discord />,
  },
  {
    exact: false,
    visible: false,
    name: 'Not Found',
    path: '/404',
    element: <NotFound />,
  },
  {
    exact: false,
    visible: true,
    name: 'Timeline',
    path: '/timeline',
    element: <Timeline />,
  },
];
