import { createTheme } from '@nextui-org/react';

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '#8C30FF',
      link: '#8C30FF',

      primaryBorder: '#8C30FF',
      primaryBorderHover: '#8C30FF',
      primarySolidHover: '#AF6DFF',
      primarySolidContrast: '#FFFFFF',
      primaryShadow: '#8C30FF',

      background: '#f0f0f0',
    },
    fonts: {
      primary: 'Raleway',
    },
  },
});

export default lightTheme;
