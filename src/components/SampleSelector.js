import { Box, Button } from "@mui/material";
import addKeypress from "../data/helpers/AddKeypress";

function SampleSelector(props) {
  const {theme, mode, setMode, sample, samples, setSamples, selectedSamples, setSelectedSamples} = props;

  const handleMode = () => {
    (mode === 'play') ? setMode('select') : setMode('play');
  }
  const handleSampleClear = () => {
    setSelectedSamples({sample, type: 'clear'});
  }
  const handleSampleSet = () => {
    setMode('faves');
  }

  const selectSampleText = (theme.language === 'japanese') ? 'サンプル選択' : 'Select Samples';
  const selectPlayText = (theme.language === 'japanese') ? 'キャンセル' : 'Cancel';

  return (
    <Box>
      <Button id="sample-picker-btn" variant="outlined" className={theme.mode} onClick={handleMode}
        sx={{mt: 2}}
      >
        {(mode === 'play') ? selectSampleText : selectPlayText}
      </Button>
      <Button variant="outlined" className={theme.mode} onClick={handleSampleClear}
      sx={{mt: 2}}>
        Clear Samples
      </Button>
      <Button variant="outlined" className={theme.mode} onClick={handleSampleSet}
      sx={{mt: 2}}>
        Play Favourites
      </Button>
    </Box>
  );
}

export default SampleSelector;