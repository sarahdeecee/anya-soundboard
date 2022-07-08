import { Box, Button } from "@mui/material";

function SampleSelector(props) {
  const {theme, mode, setMode, sample, setSelectedSamples} = props;

  const handleMode = () => {
    (mode === 'play') ? setMode('select') : setMode('play');
  }
  const handleSampleClear = () => {
    setSelectedSamples({sample, type: 'clear'});
  }
  const handleSampleSet = () => {
    setMode('faves');
  }
  const handleSampleSetEdit = () => {
    setMode('select');
  }

  const selectSampleText = (theme.language === 'japanese') ? 'サンプル選択' : 'Select Samples';
  const selectPlayText = (theme.language === 'japanese') ? '保存する' : 'Save Favourites';

  return (
    <Box>
      <Button id="sample-picker-btn" variant="outlined" className={theme.mode} onClick={handleMode}
        sx={{mt: 2}}
      >
        {(mode === 'play') ? selectSampleText : 
          (mode === 'faves') ? 'Back to Full Selection' : selectPlayText}
      </Button>
      {(mode === 'select') && <Button id="sample-clear-btn" variant="outlined" className={theme.mode} onClick={handleSampleClear}
      sx={{mt: 2}}>
        {(theme.language === 'japanese') ? 'クリア' : 'Clear Samples'}
      </Button>}
      {(mode === 'faves') && <Button id="faves-btn" variant="outlined" className={theme.mode} onClick={handleSampleSetEdit}
      sx={{mt: 2}}>
        {(theme.language === 'japanese') ? 'エディット' : 'Edit Favourites'}
      </Button>}
      {(mode !== 'faves') && <Button id="faves-btn" variant="outlined" className={theme.mode} onClick={handleSampleSet}
      sx={{mt: 2}}>
        {(theme.language === 'japanese') ? 'プレイ' : 'Play Favourites'}
      </Button>}
    </Box>
  );
}

export default SampleSelector;