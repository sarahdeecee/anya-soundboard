import { Typography } from '@mui/material';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
function Display(props) {
  const {english, romaji, japanese, theme, showTransition } = props;
  const sample = {english, romaji, japanese};
  const noSampleYet = (new Boolean(english)).valueOf();
  const displayText = noSampleYet ? sample[theme.language] : 'Click an image below or press the corresponding key to hear the sample.';

  return (
    <SwitchTransition>
      <CSSTransition classNames="fade"
        key={showTransition.display ? 'display-true' : 'display-false'}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        >
        <Typography variant={noSampleYet ? 'h3' : 'h5'} component="h1" id="display" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{displayText}</Typography>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default Display;