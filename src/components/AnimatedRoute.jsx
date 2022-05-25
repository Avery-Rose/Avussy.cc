import React from 'react';

import '../index.css';

import { AnimatePresence } from 'framer-motion';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Navbar from './NavBar';

import Home from '../pages/Home';
import Trans from '../pages/Trans';

const AnimatedRoute = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path='/'
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path='trans'
            element={
              <>
                <Navbar />
                <Trans />
              </>
            }
          />
          <Route path='*' element={<Navigate to='/404' replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
