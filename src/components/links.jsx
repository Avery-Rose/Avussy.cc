import React from 'react';
import { NavItem } from './NavItem';

export const links = [
  { name: 'Home', path: '/' },
  { name: 'Trans', path: '/trans' },
  { name: 'Guide', path: '/guide' },
];
export const generateLinks = (links, isMobile) =>
  links.map((link) => (
    <NavItem key={link.name} to={link.path} isMobile={isMobile}>
      {link.name}
    </NavItem>
  ));
