import { useContext } from 'react';
import Navbar from '@ddmc-materials/site-navbar-new';

const { NavbarThemeContext } = Navbar;
function useTheme() {
  const { theme, realTheme, onHandleTheme } = useContext(NavbarThemeContext);

  return { theme, realTheme, onHandleTheme };
}

export default useTheme;
