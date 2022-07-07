import './App.css';
import './styles/theme.scss';
import addKeypress from './data/helpers/AddKeypress';
import samples from './data/Samples.js';
import SampleBoard from './components/SampleBoard';
import Menu from './components/Menu';
import EpisodePicker from './components/EpisodePicker';
import useEventListener from './hooks/useKeyPress';
import { Button, Dialog } from "@mui/material";
import { useState } from "react";

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
    // 4: true,
    // 5: true,
    6: true,
    // 7: true,
    // 8: true,
    // 9: true,
    // 10: true,
    // 11: true,
    // 12: true,
  });
  const [openEpisodePicker, setOpenEpisodePicker] = useState(false);

  // Create array of selected episodes
  const selectedEpisodes = Object.keys(Object.fromEntries(Object.entries(checked).filter(([episode, value]) => value === true)));
  
  // Select samples from episodes and add associated keys
  const selectedSamples = addKeypress(samples.filter(sample => selectedEpisodes.includes(sample.episode)));

  const playAudio = (url) => {
    new Audio(url).play();
  }

  // Handle play audio on keypress
  const handleKeyPress = e => {
    console.log(e.key);
    const filteredSample = selectedSamples.find(sample => sample.keypress.toLowerCase() === e.key.toLowerCase());
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
        Choose Episodes
      </Button>
      <Dialog open={openEpisodePicker} onClose={handleCloseEpisodes}>
        <EpisodePicker checked={checked} setChecked={setChecked} onClose={handleCloseEpisodes} sample={sample} setSample={setSample} />
      </Dialog>
      <SampleBoard sample={sample} setSample={setSample} samples={selectedSamples} playAudio={playAudio} handleKeyPress={handleKeyPress} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} />
      {isSamplesEmpty && "No episodes selected!"}
    </div>
  );
}

export default App;
