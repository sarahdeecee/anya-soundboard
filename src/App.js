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
import { Button, Dialog } from "@mui/material";
import { useReducer, useState } from "react";
import SampleSelector from './components/SampleSelector';

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
  const [mode, setMode] = useState('play');

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
  
  const isSamplesEmpty = !Object.values(checked).includes(true);

  return (
    <div className={`App ${theme.mode}`}>
      <Menu theme={theme} setTheme={setTheme} />
      {(mode !== 'faves') && <>
        <Button id="episode-picker-btn" variant="outlined" className={theme.mode} onClick={handleOpenEpisodes}
        sx={{mt: 2}}>
          {(theme.language === 'japanese') ? 'エピソード選択' : 'Choose Episodes' }
        </Button>
        <Dialog open={openEpisodePicker} onClose={handleCloseEpisodes}>
          <EpisodePicker checked={checked} setChecked={setChecked} onClose={handleCloseEpisodes} theme={theme} sample={sample} setSample={setSample} />
        </Dialog>
      </>}
      <SampleSelector theme={theme} mode={mode} setMode={setMode} samples={samples} selectedSamples={selectedSamples} setSelectedSamples={setSelectedSamples} />
      <Display {...sample} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} />
      {(mode !== 'faves') && <SampleBoard sample={sample} setSample={setSample} samples={setSamplesFromEpisodesFull} playAudio={playAudio} handleKeyPress={handleKeyPress} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} selectedSamples={selectedSamples} setSelectedSamples={setSelectedSamples} mode={mode} />}
      {(mode === 'faves') && <SampleBoard sample={sample} setSample={setSample} samples={selectedSamplesFull} playAudio={playAudio} handleKeyPress={handleKeyPress} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} selectedSamples={selectedSamples} setSelectedSamples={setSelectedSamples} mode={mode} />}
      {isSamplesEmpty && ((theme.language === 'japanese') ? 'エピソードを選択してください' : "No episodes selected!")}
      <MobileMenu theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
