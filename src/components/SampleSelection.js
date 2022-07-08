import { Grid, Typography } from "@mui/material";
import addKeypress from "../data/helpers/AddKeypress";
import SampleButtonMini from "./SampleButtonMini";

function SampleSelection(props) {
  const {samples, selectedSamples, setSelectedSamples, theme} = props;
  
  const selectedSamplesFull = selectedSamples ? addKeypress(selectedSamples.map(sampleEnglish =>
    samples.find(sample => sample.english === sampleEnglish)
    ))
    : [];

  console.log(selectedSamplesFull);
  const parsedSamples = selectedSamplesFull.map(sample =>
    <Grid container item
      xs={2} md={1}
      wrap="nowrap"
      direction="column"
      key={sample.english}
      className="drum-pad">
      <Grid item>
        <SampleButtonMini {...sample}
          key={`mini-${sample.keypress}`}
        />
      </Grid>
      <Grid item xs={12} sx={{maxWidth: '200px', overflow: "hidden", textOverflow: "ellipsis"}}>
        <Typography
          key={`mini-${sample.english}`}
          variant="p"
          className="drum-action"
          noWrap
        >{sample[theme.language]}
        </Typography>
      </Grid>
    </Grid>
  );
  
  return (<Grid container sx={{width: '100%'}}>
    {parsedSamples}
    </Grid>
  );
}

export default SampleSelection;