import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, Box, Divider, Paper, Tab, Tabs, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from "@mui/material";
import EpisodePicker from "./EpisodePicker";

function Menu(props) {
  const {theme, setTheme, checked, setChecked, handleCloseEpisodes, sample, setSample} = props;
  const handleLanguage = e => {
    setTheme({...theme, language: e.target.value});
  }
  const handleMode = (e, mode) => {
    setTheme({...theme, mode});
  }
  return (
    <AppBar position="static" id="menu">
      <Toolbar  sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        {/* <Box> */}
          <Typography variant="h5" component="h1">
            Anya Soundboard
          </Typography>
          <Tabs>
            <Tab label={theme.language === 'japanese' ? 'ポン出し' : 'Play'} />
            <Tab label={theme.language === 'japanese' ? '選択' : 'Select'} />
            <Tab label={theme.language === 'japanese' ? '気に入り' : 'Favourites'} />
            <Tab label={theme.language === 'japanese' ? 'エピソード' : 'Episodes'} />
          </Tabs>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <ToggleButtonGroup
              value={theme.mode}
              exclusive
              onChange={handleMode}
              className="menu-group"
            >
              <ToggleButton value="light" sx={{border: 0}} className={theme.mode}><LightMode /></ToggleButton>
              <ToggleButton value="dark" sx={{border: 0}} className={theme.mode}><DarkMode /></ToggleButton>
            </ToggleButtonGroup>
            <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
            <ToggleButtonGroup
              value={theme.language}
              exclusive
              onChange={handleLanguage}
              className="menu-group"
            >
              <ToggleButton value="english" sx={{border: 0}} className={theme.mode}>{theme.language === 'japanese' ? '英' : 'EN'}</ToggleButton>
              <ToggleButton value="romaji" sx={{border: 0}} className={theme.mode}>{theme.language === 'japanese' ? 'A' : 'RO'}</ToggleButton>
              <ToggleButton value="japanese" sx={{border: 0}} className={theme.mode}>{theme.language === 'japanese' ? '日' : 'JP'}</ToggleButton>
            </ToggleButtonGroup>
          </Box>
        {/* </Box> */}
      </Toolbar>
    </AppBar>
  );
}

export default Menu;