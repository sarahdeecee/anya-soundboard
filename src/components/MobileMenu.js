import { BottomNavigation, BottomNavigationAction, Divider, List, ListItemIcon, ListItem, Menu, MenuItem,Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { PlayArrow, Favorite, FilterAlt, Settings, PersonAdd, Logout } from "@mui/icons-material";
import { useState } from "react";

function MobileMenu(props) {
  const {theme, setTheme, mode, setMode, handleOpenEpisodes} = props;
  const [navValue, setNavValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLanguage = language => {
    setAnchorEl(null);
    setTheme({...theme, language});
  }
  const handleMode = mode => {
    setAnchorEl(null);
    setTheme({...theme, mode});
  }

  const handleSettings = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menu = <Menu
    id="popup-menu"
    aria-label="Device settings"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    sx={{marginLeft: '1em'}}
  >
    <MenuItem value="light" className={theme.mode} onClick={() => handleMode('light')}>{theme.language === 'japanese' ? 'ライト' : 'Light'}</MenuItem>
    <MenuItem value="dark" className={theme.mode} onClick={() => handleMode('dark')}>{theme.language === 'japanese' ? 'ダーク' : 'Dark'}</MenuItem>
    <Divider flexItem sx={{ mx: 0.5, my: 1 }} />
    <MenuItem value="english" className={theme.mode} onClick={() => handleLanguage('english')}>{theme.language === 'japanese' ? '英語' : 'English'}</MenuItem>
    <MenuItem value="romaji" className={theme.mode} onClick={() => handleLanguage('romaji')}>{theme.language === 'japanese' ? 'ローマ字' : 'Romaji'}</MenuItem>
    <MenuItem value="japanese" className={theme.mode} onClick={() => handleLanguage('japanese')}>{theme.language === 'japanese' ? '日本語' : 'Japanese'}</MenuItem>
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
      <BottomNavigationAction label={(theme.language === 'japanese') ? 'ポン出し' : 'Play'} icon={<PlayArrow />} onClick={() => setMode('play')} />
      <BottomNavigationAction label={(theme.language === 'japanese') ? 'セレクト' : 'Select'} icon={<FilterAlt />} onClick={() => setMode('select')} />
      <BottomNavigationAction label={(theme.language === 'japanese') ? 'カスタム' : 'Favorites'} icon={<Favorite />} onClick={() => setMode('faves')} />
      <BottomNavigationAction label={(theme.language === 'japanese') ? '設定' : 'Settings'} icon={<Settings />} onClick={handleSettings} />
    </BottomNavigation>
    {menu}
    </>
  );
}

export default MobileMenu;