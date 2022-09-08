import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';

import { redirects } from './redirects';
import { pages } from './pages';
import { Nav } from '../components/Nav';

export const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const Router = () => {
  const location = useLocation();

  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          {pages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <motion.div
                  className='container'
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  {page.element}
                </motion.div>
              }
              exact={page.exact}
            />
          ))}
          {redirects.map((redirect) => (
            <Route
              key={redirect.from}
              path={redirect.from}
              element={<Navigate to={redirect.to} replace />}
            />
          ))}
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Router;
