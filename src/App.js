import './App.css';
import './styles/theme.scss';
import addKeypress from './data/helpers/AddKeypress';
import sampleData from './data/Samples.js';
import Display from './components/Display';
import SampleBoard from './components/SampleBoard';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';
import EpisodePicker from './components/EpisodePicker';
import useEventListener from './hooks/useKeyPress';
import { Box, Button, createTheme, CssBaseline, Dialog, TabPanel, ThemeProvider } from "@mui/material";
import { useMemo, useReducer, useState } from "react";
import SampleSelector from './components/SampleSelector';
import { darkTheme, lightTheme } from './styles/Theme';
import { ColorContext } from './ColorContext';

function App() {
  const [sample, setSample] = useState({});
  const [theme, setTheme] = useState({
    mode: 'light',
    language: 'english'
  });
  const [showTransition, setShowTransition] = useState({
    display: true,
    button: false
  });
  const [checked, setChecked] = useState({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
  });
  const [openEpisodePicker, setOpenEpisodePicker] = useState(false);
  const [openSampleText, setOpenSampleText] = useState(true);
  const [mode, setMode] = useState('play');

  // theme colours
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setTheme(prevTheme =>
          prevTheme, theme.mode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  
  const themeMode = useMemo(
    () => createTheme(theme.mode === "light" ? lightTheme : darkTheme),
    [theme.mode]
  );

  const samples = addKeypress(sampleData);
  
  // Sample selection
  const sampleReducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return [...state, action.sample];
      case 'remove':
        const update = [...state];
        update.splice(update.indexOf(action.sample), 1);
        return update;
      case 'clear':
        return [];
      default:
        return state;
    }
  };

  const [selectedSamples, setSelectedSamples] = useReducer(sampleReducer, []);

  // Create array of selected episodes
  const selectedEpisodes = Object.keys(Object.fromEntries(Object.entries(checked).filter(([episode, value]) => value === true)));
  
  // Select samples from episodes and add associated keys
  const setSamplesFromEpisodesFull = addKeypress(samples.filter(sample => selectedEpisodes.includes(sample.episode)));

  // If selected samples has any samples (based on English value), add keypress and other keys
  const selectedSamplesFull = selectedSamples.length ? addKeypress(selectedSamples.map(sampleEnglish =>
    setSamplesFromEpisodesFull.find(sample => sample.english === sampleEnglish)
    ))
    : [];

  const playAudio = (url) => {
    new Audio(url).play();
  }

  // Handle play audio on keypress (play selectedSamples or samples based on mode)
  const handleKeyPress = e => {
    const filteredSample = (mode === 'faves') ? selectedSamplesFull.find(sample => sample.keypress.toLowerCase() === e.key.toLowerCase())
      : (mode === 'play') ? setSamplesFromEpisodesFull.find(sample => sample.keypress.toLowerCase() === e.key.toLowerCase())
        : '';
    if (filteredSample) {
      setShowTransition({...showTransition, display: !showTransition.display});
      setSample(filteredSample);
      playAudio(filteredSample.file);
    }
  }

  useEventListener("keydown", handleKeyPress);

  // Handle episode picker dialog
  const handleOpenEpisodes = () => {
    setOpenEpisodePicker(true);
  };
  const handleCloseEpisodes = () => {
    setOpenEpisodePicker(false);
  };
  
  const handleSampleTextClose = () => {
  //   setOpenSampleText(false);
  }
  
  const isSamplesEmpty = !Object.values(checked).includes(true);

  return (
    <ColorContext.Provider value={colorMode}>
    <ThemeProvider theme={themeMode}>
      <CssBaseline enableColorScheme />
    <div className={`App ${theme.mode}`}>
      <Box sx={{minHeight: '100vh'}}>
        <Menu theme={theme} setTheme={setTheme} mode={mode} setMode={setMode} handleOpenEpisodes={handleOpenEpisodes} />
        <Dialog open={openEpisodePicker} onClose={handleCloseEpisodes}>
          <EpisodePicker checked={checked} setChecked={setChecked} onClose={handleCloseEpisodes} theme={theme} sample={sample} setSample={setSample} />
        </Dialog>
        <Display {...sample} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} />
        <Box sx={{p: 2, display: 'flex', justifyContent: 'center'}}>
          {(mode !== 'faves') && 
            <SampleBoard openSampleText={openSampleText} setOpenSampleText={setOpenSampleText} sample={sample} setSample={setSample} samples={setSamplesFromEpisodesFull} playAudio={playAudio} handleKeyPress={handleKeyPress} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} selectedSamples={selectedSamples} setSelectedSamples={setSelectedSamples} mode={mode} />
          }
          {(mode === 'faves') && 
            <SampleBoard openSampleText={openSampleText} setOpenSampleText={setOpenSampleText} sample={sample} setSample={setSample} samples={selectedSamplesFull} playAudio={playAudio} handleKeyPress={handleKeyPress} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} selectedSamples={selectedSamples} setSelectedSamples={setSelectedSamples} mode={mode} />
          }
          {isSamplesEmpty && ((theme.language === 'japanese') ? 'エピソードを選択してください' : "No episodes selected!")}
        </Box>
        <MobileMenu theme={theme} setTheme={setTheme} mode={mode} setMode={setMode} handleOpenEpisodes={handleOpenEpisodes} />
      </Box>
    </div>
    </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
