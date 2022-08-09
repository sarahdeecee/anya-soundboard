import { Box, Grid, Skeleton, Typography } from "@mui/material";
import SampleButton from "./SampleButton";

function SampleBoard(props) {
  const {setSample, playAudio, samples, theme, showTransition, setShowTransition, selectedSamples, setSelectedSamples, mode, openSampleText, setOpenSampleText} = props;
  
  const loadingSamplesNumber = 12;
  const loadingSamples = [...Array(loadingSamplesNumber)].map((e, i) => <Grid key={i} container item xs={4} sm={3} md={2} lg={1.50}>
    <Grid item xs={12}>
      <Skeleton variant="rectangular" />
    </Grid>
    <Grid item xs={12}>
      <Skeleton variant="text" />
    </Grid>
  </Grid>);

  const sampleButtons = samples ? samples.map(sample => 
      <Grid container item
        xs={4} sm={3} md={2} lg={1.50}
        wrap="nowrap"
        direction="column"
        key={sample.english}
        className="drum-pad"
        >
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
            theme={theme}
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
  ) : {loadingSamples};
  return (
    <Box className="drum-machine" tabIndex={0}>
      <Grid container spacing={{xs: 1, sm: 2}} sx={{display: 'flex', justifyContent: 'center'}}>
        {sampleButtons}
      </Grid>
    </Box>
  );
}

export default SampleBoard;