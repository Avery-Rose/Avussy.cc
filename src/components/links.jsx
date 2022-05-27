import React from 'react';
import { MobileItem } from './MobileItem';

export const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
];
export const generateLinks = (links) =>
  links.map((link) => (
    <MobileItem key={link.name} to={link.path}>
      {link.name}
    </MobileItem>
  ));
