import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, Avatar, Box, Divider, Tab, Tabs, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from "@mui/material";

function Menu(props) {
  const {theme, setTheme, mode, setMode, handleOpenEpisodes} = props;
  const handleThemeLanguage = e => {
    setTheme({...theme, language: e.target.value});
  }
  const handleThemeMode = (e, mode) => {
    setTheme({...theme, mode});
  }
  const handleMode = (e, value) => {
    console.log('event ', e);
    console.log('value ',value);
    if (value !== 3) {
      setMode(value);
    }
  }
  return (
    <AppBar position="fixed" id="menu" sx={{mb: 2, top: 0}}>
      <Toolbar disableGutters sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Avatar variant="square" src="anyaicon.png" className={theme.mode} sx={{height: '64px', width: '64px', borderRadius: 0, border: 0, mr: 2}}></Avatar>
          <Typography variant="h5" component="h1">
            Anya Soundboard
          </Typography>
        </Box>
        <Tabs value={mode} variant="scrollable" scrollButtons="auto" onChange={handleMode}>
          <Tab label={theme.language === 'japanese' ? 'ポン出し' : 'Play'} value="play" />
          <Tab label={theme.language === 'japanese' ? '選択' : 'Select'} value="select" />
          <Tab label={theme.language === 'japanese' ? '気に入り' : 'Favourites'} value="faves" />
          <Tab label={theme.language === 'japanese' ? 'エピソード' : 'Episodes'} onClick={handleOpenEpisodes}/>
        </Tabs>
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
          <ToggleButtonGroup
            value={theme.mode}
            exclusive
            onChange={handleThemeMode}
            className="menu-group"
          >
            <ToggleButton value="light" className={theme.mode} disabled={theme.mode === 'light'}><LightMode /></ToggleButton>
            <ToggleButton value="dark" className={theme.mode} disabled={theme.mode === 'dark'}><DarkMode /></ToggleButton>
          </ToggleButtonGroup>
          <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
          <ToggleButtonGroup
            value={theme.language}
            exclusive
            onChange={handleThemeLanguage}
            className="menu-group"
            sx={{mr: 1}}
          >
            <ToggleButton value="english" className={theme.mode}>{theme.language === 'japanese' ? '英' : 'EN'}</ToggleButton>
            <ToggleButton value="romaji" className={theme.mode}>{theme.language === 'japanese' ? 'A' : 'RO'}</ToggleButton>
            <ToggleButton value="japanese" className={theme.mode}>{theme.language === 'japanese' ? '日' : 'JP'}</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;