import { Badge, ButtonBase } from "@mui/material";
import { CSSTransition } from "react-transition-group";

function SampleButton(props) {
  const {theme, english, romaji, japanese, keypress, file, picture, showTransition, setShowTransition, selectedSamples, setSelectedSamples, mode, openSampleText, setOpenSampleText} = props;
  const {playAudio, setSample} = props;
  const sample = {english, romaji, japanese, keypress, file, picture};

  const clickPicture = () => {
    setSample(sample);
    playAudio(file);
    setOpenSampleText(true);
    setShowTransition({...showTransition, display: !showTransition.display});
  }

  const addSample = sample => {
    setSelectedSamples({sample, type: 'add'});
  }
  const removeSample = sample => {
    setSelectedSamples({sample, type: 'remove'});
  }

  const handleSampleSelection = () => {
    (selectedSamples.includes(english)) ? removeSample(english) : addSample(english);
  }

  const sampleImg = <img 
    id={keypress}
    src={picture}
    srcSet={picture}
    alt={english}
    className={(mode === 'select' && !selectedSamples.includes(english)) ? `${mode} sample ${theme.mode}` : `sample ${theme.mode}`}
    onClick={(mode === 'select') ? handleSampleSelection : clickPicture}
  />
  
  return (
    <CSSTransition timeout={50}>
      <ButtonBase sx={{borderRadius: '10px'}}>
        <Badge color="secondary" overlap="circular" badgeContent={keypress.toUpperCase()} invisible={(keypress === '') || (mode === 'select')} sx={{width: '100%'}}>
          {sampleImg}
        </Badge>
      </ButtonBase>
    </CSSTransition>
  );
}

export default SampleButton;