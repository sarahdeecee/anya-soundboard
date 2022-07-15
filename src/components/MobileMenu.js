import { Avatar, BottomNavigation, BottomNavigationAction, Divider, ListItemIcon, Menu, MenuItem, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { PlayArrow, Favorite, FilterAlt, Settings, PersonAdd, Logout } from "@mui/icons-material";
import { useState } from "react";

function MobileMenu(props) {
  const {theme, setTheme, mode, setMode, handleOpenEpisodes} = props;
  const [navValue, setNavValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event) => {
  };
  
  const handleLanguage = e => {
    console.log(e.target)
    setAnchorEl(null);
    setTheme({...theme, language: e.target.value});
  }
  const handleMode = e => {
    setAnchorEl(null);
    setTheme({...theme, mode: e.target.value});
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleSettings = () => {
    
  }

  const themeOptions = {
    
  }

  // const handleClick = (event) => {
  //   setNavAnchor(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setNavAnchor(null);
  // };

  const options = [
    'Light', 'Dark',
    'English', 'Romaji', 'Japanese'
  ];

  const menu = <Menu
    id="lock-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'lock-button',
      role: 'listbox',
    }}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
  >
      <ToggleButtonGroup
        value={theme.mode}
        exclusive
        onChange={handleMode}
        className="menu-group"
      >
        <ToggleButton value="light" sx={{border: 0}} className={theme.mode}>{theme.language === 'japanese' ? 'ライト' : 'Light'}</ToggleButton>
        <ToggleButton value="dark" sx={{border: 0}} className={theme.mode}>{theme.language === 'japanese' ? 'ダーク' : 'Dark'}</ToggleButton>
      </ToggleButtonGroup>
      <Divider id="menu-divider" flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
      <ToggleButtonGroup
        value={theme.language}
        exclusive
        onChange={handleLanguage}
        className="menu-group"
      >
        <ToggleButton value="english" sx={{border: 0}} className={theme.mode}>{theme.language === 'japanese' ? '英語' : 'English'}</ToggleButton>
        <ToggleButton value="romaji" sx={{border: 0}} className={theme.mode}>{theme.language === 'japanese' ? 'ローマ字' : 'Romaji'}</ToggleButton>
        <ToggleButton value="japanese" sx={{border: 0}} className={theme.mode}>{theme.language === 'japanese' ? '日本語' : 'Japanese'}</ToggleButton>
      </ToggleButtonGroup>
  </Menu>

  return (<>
    <BottomNavigation
      id="mobile-menu"
      className={theme.mode}
      showLabels
      value={navValue}
      onChange={(event, newValue) => {
        setNavValue(newValue);
      }}
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigationAction label="Play" icon={<PlayArrow />} onClick={() => setMode('play')} />
      <BottomNavigationAction label="Select" icon={<FilterAlt />} onClick={() => setMode('select')} />
      <BottomNavigationAction label="Favorites" icon={<Favorite />} onClick={() => setMode('faves')} />
      <BottomNavigationAction label="Settings" icon={<Settings />} onClick={handleClickListItem} />
    </BottomNavigation>
    {menu}
    </>
  );
}

export default MobileMenu;