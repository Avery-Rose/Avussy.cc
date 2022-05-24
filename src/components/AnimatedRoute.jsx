import React from 'react';

import Home from '../pages/home/Home';
import NavBar from '../components/NavBar';
import NotFound from '../pages/404/NotFound';
import Trans from '../pages/Trans/Trans';

import { AnimatePresence } from 'framer-motion';
import { Routes, Route, Navigate } from 'react-router-dom';

const AnimatedRoute = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='404' element={<NotFound />} />
        <Route path='trans' element={<Trans />} />
        {/* if not found redirect to 404 page */}
        <Route path='*' element={<Navigate to='/404' replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
