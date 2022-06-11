import { Divider, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";

function Menu(props) {
  const {theme, setTheme} = props;
  const handleLanguage = e => {
    setTheme({...theme, language: e.target.value});
  }
  const handleMode = e => {
    setTheme({...theme, mode: e.target.value});
  }
  return (
    <Paper id="menu" variant="outlined" className={theme.mode}>
      <ToggleButtonGroup
        value={theme.mode}
        exclusive
        onChange={handleMode}
        className="menu-group"
      >
        <ToggleButton value="light" sx={{border: 0}} className={theme.mode}>Light</ToggleButton>
        <ToggleButton value="dark" sx={{border: 0}} className={theme.mode}>Dark</ToggleButton>
      </ToggleButtonGroup>
      <Divider id="menu-divider" flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
      <ToggleButtonGroup
        value={theme.language}
        exclusive
        onChange={handleLanguage}
        className="menu-group"
      >
        <ToggleButton value="english" sx={{border: 0}} className={theme.mode}>English</ToggleButton>
        <ToggleButton value="romaji" sx={{border: 0}} className={theme.mode}>Romaji</ToggleButton>
        <ToggleButton value="japanese" sx={{border: 0}} className={theme.mode}>Japanese</ToggleButton>
      </ToggleButtonGroup>
    </Paper>
  );
}

export default Menu;