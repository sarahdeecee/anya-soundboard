import './App.css';
import './styles/theme.scss';
import addKeypress from './data/helpers/AddKeypress';
import samples from './data/Samples.js';
import SampleBoard from './components/SampleBoard';
import Menu from './components/Menu';
import EpisodePicker from './components/EpisodePicker';
import useEventListener from './hooks/useKeyPress';
import { Button, Dialog } from "@mui/material";
import { useReducer, useState } from "react";
import SampleSelection from './components/SampleSelection';
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
    // 7: true,
    // 8: true,
    // 9: true,
    // 10: true,
    // 11: true,
    // 12: true,
  });
  const [openEpisodePicker, setOpenEpisodePicker] = useState(false);
  const [mode, setMode] = useState('play');
  
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
  const setSamples = addKeypress(samples.filter(sample => selectedEpisodes.includes(sample.episode)));

  const playAudio = (url) => {
    new Audio(url).play();
  }

  // Handle play audio on keypress
  const handleKeyPress = e => {
    const filteredSample = setSamples.find(sample => sample.keypress.toLowerCase() === e.key.toLowerCase());
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
      <Button id="episode-picker-btn" variant="outlined" className={theme.mode} onClick={handleOpenEpisodes}
      sx={{mt: 2}}>
        {(theme.language === 'japanese') ? 'エピソード選択' : 'Choose Episodes' }
      </Button>
      <SampleSelector theme={theme} mode={mode} setMode={setMode} selectedSamples={selectedSamples} setSelectedSamples={setSelectedSamples} />
      {/* <SampleSelection samples={samples} selectedSamples={selectedSamples} setSelectedSamples={setSelectedSamples} theme={theme} /> */}
      <Dialog open={openEpisodePicker} onClose={handleCloseEpisodes}>
        <EpisodePicker checked={checked} setChecked={setChecked} onClose={handleCloseEpisodes} theme={theme} sample={sample} setSample={setSample} />
      </Dialog>
      <SampleBoard sample={sample} setSample={setSample} samples={setSamples} playAudio={playAudio} handleKeyPress={handleKeyPress} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} selectedSamples={selectedSamples} setSelectedSamples={setSelectedSamples} mode={mode} />
      {isSamplesEmpty && ((theme.language === 'japanese') ? 'エピソードを選択してください' : "No episodes selected!")}
    </div>
  );
}

export default App;
