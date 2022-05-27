import React from 'react';
import { MobileItem } from './MobileItem';

export const links = [
  { name: 'Home', path: '/' },
  { name: 'Trans', path: '/trans' },
  { name: 'Profanity', path: '/dataset' },
];
export const generateLinks = (links) =>
  links.map((link) => (
    <MobileItem key={link.name} to={link.path}>
      {link.name}
    </MobileItem>
  ));
