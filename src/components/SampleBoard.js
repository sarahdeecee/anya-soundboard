import { Grid, Typography } from "@mui/material";
import SampleButton from "./SampleButton";
import Display from "./Display";

function SampleBoard(props) {
  const {sample, setSample, playAudio, samples, theme, showTransition, setShowTransition, selectedSamples, setSelectedSamples, mode, openSampleText, setOpenSampleText} = props;
  
  const sampleButtons = samples.map(sample => 
      <Grid container item
        xs={4} md={3} lg={2}
        wrap="nowrap"
        direction="column"
        key={sample.english}
        className="drum-pad">
        <Grid item xs={12}>
          <SampleButton
            key={`pad-${sample.keypress}`}
            {...sample} 
            playAudio={playAudio}
            setSample={setSample}
            showTransition={showTransition}
            setShowTransition={setShowTransition}
            selectedSamples={selectedSamples}
            setSelectedSamples={setSelectedSamples}
            mode={mode}
            openSampleText={openSampleText}
            setOpenSampleText={setOpenSampleText}
          />
        </Grid>
        <Grid item xs={12} sx={{maxWidth: '200px', overflow: "hidden", textOverflow: "ellipsis"}}>
          <Typography
            key={`bar-${sample.english}`}
            variant="p"
            className="drum-action"
            noWrap
          >{sample[theme.language]}
          </Typography>
        </Grid>
      </Grid>
  );
  return (
    <div className="drum-machine" tabIndex={0}>
      <Grid container spacing={{xs: 1, sm: 2}} xs={12}>
        {sampleButtons}
      </Grid>
    </div>
  );
}

export default SampleBoard;