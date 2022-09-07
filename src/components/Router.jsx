import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  Link,
} from 'react-router-dom';

import { Link as NextLink } from '@nextui-org/react';

import { AnimatePresence } from 'framer-motion';

import Main from '../pages/Main';
import Discord from '../pages/Discord';
import Me from '../pages/Me';
import { Navbar } from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
];

const Nav = (props) => {
  const variants = ['static', 'floating', 'sticky'];
  const getActive = (href) => {
    return window.location.pathname === href;
  };

  const populateLinks = () => {
    return links.map((link) => {
      return (
        <Navbar.Link key={link.name} isActive={getActive(link.href)}>
          <Link to={link.href}>{link.name}</Link>
        </Navbar.Link>
      );
    });
  };

  return (
    <Navbar isBordered variant={variants[1]}>
      <Navbar.Content variant='underline-rounded'>
        {populateLinks()}
      </Navbar.Content>

      <Navbar.Content>
        <Navbar.Item>
          <ThemeSwitcher />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

const Router = () => {
  const location = useLocation();

  return (
    <>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route
            exact
            path='/'
            element={
              <>
                <Main />
              </>
            }
          />

          <Route
            path='/about'
            element={
              <>
                <Me />
              </>
            }
          />
          <Route path='/invite' element={<Discord />} />

          <Route path='me' element={<Navigate to='about' replace />} />
          <Route path='discord' element={<Navigate to='invite' replace />} />
          <Route path='/404' element={<Me />} />
          <Route path='*' element={<Navigate to='404' replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Router;
