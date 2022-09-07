import React from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@nextui-org/react';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

export const ThemeSwitcher = () => {
  const { setTheme } = useTheme();

  return (
    <Switch
      color='primary'
      shadow
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}
      onChange={(e) => {
        const theme = e.target.checked ? 'light' : 'dark';
        setTheme(theme);
        localStorage.setItem('theme', theme);
      }}
      initialChecked={localStorage.getItem('theme') === 'light'}
    />
  );
};
