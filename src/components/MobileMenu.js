import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { PlayArrow, Favorite, FilterAlt, Settings } from "@mui/icons-material";
import { useState } from "react";

function Menu(props) {
  const {theme, setTheme, mode, setMode, handleOpenEpisodes} = props;
  const [value, setValue] = useState(0);
  
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
      <BottomNavigationAction label="Play" icon={<PlayArrow />} onClick={() => setMode('play')} />
      <BottomNavigationAction label="Select" icon={<FilterAlt />} onClick={() => setMode('select')} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} onClick={() => setMode('faves')} />
      <BottomNavigationAction label="Settings" icon={<Settings />} />
    </BottomNavigation>
  );
}

export default Menu;