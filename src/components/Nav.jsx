import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@nextui-org/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { pages } from '../handlers/pages';

export const Nav = (props) => {
  const variants = ['static', 'floating', 'sticky'];
  const getActive = (href) => {
    return window.location.pathname === href;
  };

  return (
    <Navbar isBordered variant={variants[1]}>
      <Navbar.Content variant='underline-rounded'>
        {pages.map((link) => {
          return (
            link.visible && (
              <Navbar.Link key={link.name} isActive={getActive(link.path)}>
                <Link to={link.path}>{link.name}</Link>
              </Navbar.Link>
            )
          );
        })}
      </Navbar.Content>

      <Navbar.Content>
        <Navbar.Item>
          <ThemeSwitcher />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};
