import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Favorite, FilterAlt, Settings } from "@mui/icons-material";
import { useState } from "react";

function Menu(props) {
  const {theme, setTheme} = props;
  const [value, setValue] = useState(0);
  const handleLanguage = e => {
    setTheme({...theme, language: e.target.value});
  }
  const handleMode = e => {
    setTheme({...theme, mode: e.target.value});
  }
  return (
    <BottomNavigation
      id="mobile-menu"
      className={theme.mode}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label="Selection" icon={<FilterAlt />} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
      <BottomNavigationAction label="Settings" icon={<Settings />} />
    </BottomNavigation>
  );
}

export default Menu;