import { Typography } from '@mui/material';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
function Display(props) {
  const {english, romaji, japanese, theme, showTransition } = props;
  const sample = {english, romaji, japanese};
  const noSampleYet = (new Boolean(english)).valueOf();
  const displayEnglish = noSampleYet ? english : 'Click an image below or press the corresponding key to hear the sample.';
  const displayJapanese = noSampleYet ? japanese : '下の画像をクリックし（または画像に応じたキーを押して）、音が出ます。';

  return (
    <SwitchTransition>
      <CSSTransition classNames="fade"
        key={showTransition.display ? 'display-true' : 'display-false'}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        >
        <Typography variant={noSampleYet ? 'h3' : 'h5'} component="h1" id="display" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{(theme.language === 'japanese') ? displayJapanese : displayEnglish}</Typography>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default Display;