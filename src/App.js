import './App.css';
import './styles/theme.scss';
import DrumMachine from './components/DrumMachine';
import Menu from './components/Menu';
import EpisodePicker from './components/EpisodePicker';
import samples from './data/Samples.js';
import useEventListener from './hooks/useKeyPress';
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
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
  });

  function playAudio(url) {
    new Audio(url).play();
  }

  const handleKeyPress = e => {
    console.log(e.key);
    const filteredSample = samples.find(sample => sample.keypress.toLowerCase() === e.key.toLowerCase());
    if (filteredSample) {
      setShowTransition({...showTransition, display: !showTransition.display});
      setSample(filteredSample);
      playAudio(filteredSample.file);
    }
  }

  useEventListener("keydown", handleKeyPress);

  return (
    <div className={`App ${theme.mode}`}>
      <Menu theme={theme} setTheme={setTheme} />
      <EpisodePicker checked={checked} setChecked={setChecked} />
      <DrumMachine sample={sample} setSample={setSample} samples={samples} playAudio={playAudio} handleKeyPress={handleKeyPress} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} />
    </div>
  );
}

export default App;
