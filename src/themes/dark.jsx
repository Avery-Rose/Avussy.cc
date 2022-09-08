import { createTheme } from '@nextui-org/react';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#ff8df4',
      link: '#ff8df4',

      primaryBorder: '#ff8df4',
      primaryBorderHover: '#ff8df4',
      primarySolidHover: '#FFA8F6',
      primarySolidContrast: '#FFFFFF',
      primaryShadow: '#9B4C93',

      background: '#202020',
    },
    fonts: {
      primary: 'Raleway',
    },
  },
});

export default darkTheme;
