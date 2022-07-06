import './App.css';
import './styles/theme.scss';
import DrumMachine from './components/DrumMachine';
import Menu from './components/Menu';
import EpisodePicker from './components/EpisodePicker';
import samples from './data/Samples.js';
import useEventListener from './hooks/useKeyPress';
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, TextField } from "@mui/material";
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

  function playAudio(url) {
    new Audio(url).play();
  }

  const selectedEpisodes = Object.keys(Object.fromEntries(Object.entries(checked).filter(([episode, value]) => value === true)));
  
  const selectedSamples = samples.filter(sample => selectedEpisodes.includes(sample.episode));

  const handleKeyPress = e => {
    console.log(e.key);
    const filteredSample = selectedSamples.find(sample => sample.keypress.toLowerCase() === e.key.toLowerCase());
    if (filteredSample) {
      setShowTransition({...showTransition, display: !showTransition.display});
      setSample(filteredSample);
      playAudio(filteredSample.file);
    }
  }

  const handleOpenEpisodes = () => {
    setOpenEpisodePicker(true);
  };
  const handleCloseEpisodes = () => {
    setOpenEpisodePicker(false);
  };

  const isSamplesEmpty = !Object.values(checked).includes(true);

  useEventListener("keydown", handleKeyPress);

  return (
    <div className={`App ${theme.mode}`}>
      <Menu theme={theme} setTheme={setTheme} />
      <Button variant="outlined" onClick={handleOpenEpisodes}>
        Choose Episodes
      </Button>
      <Dialog open={openEpisodePicker} onClose={handleCloseEpisodes}>
        <EpisodePicker checked={checked} setChecked={setChecked} onClose={handleCloseEpisodes} />
      </Dialog>
      <DrumMachine sample={sample} setSample={setSample} samples={selectedSamples} playAudio={playAudio} handleKeyPress={handleKeyPress} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} />
      {isSamplesEmpty && "No episodes selected!"}
    </div>
  );
}

export default App;
