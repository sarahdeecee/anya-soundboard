import { Box, Button } from "@mui/material";

function SampleSelector(props) {
  const {theme, mode, setMode, sample, selectedSamples, setSelectedSamples} = props;

  const handleMode = () => {
    (mode === 'play') ? setMode('select') : setMode('play');
  }
  const handleSampleClear = () => {
    setSelectedSamples({sample, type: 'clear'});
  }

  const selectSampleText = (theme.language === 'japanese') ? 'サンプル選択' : 'Select Samples';
  const selectPlayText = (theme.language === 'japanese') ? 'サンプルを聴く' : 'Play Samples';

  return (<Box>
    <Button id="sample-picker-btn" variant="outlined" className={theme.mode} onClick={handleMode}
      sx={{mt: 2}}>
        {(mode === 'play') ? selectSampleText : selectPlayText}
      </Button>
      <Button variant="outlined" className={theme.mode} onClick={handleSampleClear}
      sx={{mt: 2}}>
        Clear Samples
      </Button>
    </Box>
  );
}

export default SampleSelector;