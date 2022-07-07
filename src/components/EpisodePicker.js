import { Checkbox, FormControlLabel, Button, DialogTitle, DialogActions, DialogContent, Grid } from "@mui/material";

function EpisodePicker(props) {
  const {checked, setChecked, onClose, setSample} = props;

  const numberOfEpisodes = [1, 2, 3,
    // 4, 5, 6, 7, 8, 9, 10, 11, 12
  ];

  const handleCheck = (e) => {
    setChecked({...checked, [e.target.value]: e.target.checked});
  };
  const handleCheckAll = (e) => {
    if (Object.values(checked).includes(true)) {
     setChecked({1: false,
      2: false,
      3: false,
      // 4: false,
      // 5: false,
      // 6: false,
      // 7: false,
      // 8: false,
      // 9: false,
      // 10: false,
      // 11: false,
      // 12: false
      });
      setSample({});
    } else {
      setChecked({1: true,
        2: true,
        3: true,
        // 4: true,
        // 5: true,
        // 6: true,
        // 7: true,
        // 8: true,
        // 9: true,
        // 10: true,
        // 11: true,
        // 12: true,
      });
    }
  };
  
  const episodeList = numberOfEpisodes.map((episode) => <Grid item>
      <FormControlLabel
        key={episode}
        label={`Episode ${episode}`}
        value={episode}
        control={<Checkbox checked={checked[episode]} onChange={handleCheck} />}
      />
    </Grid>
  );

  return (<>
  <DialogTitle>Choose Episodes</DialogTitle>
    <DialogContent>
      <FormControlLabel
        label={!Object.values(checked).includes(true) ? 'Select All' : 'Deselect All'}
        control={
          <Checkbox
            checked={Object.values(checked).includes(true) && !Object.values(checked).includes(false)}
            indeterminate={Object.values(checked).includes(true) && Object.values(checked).includes(false)}
            onChange={handleCheckAll}
          />
        }
      />
      <Grid container sx={{justifySelf: "stretch"}}>
      {episodeList}
      </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </>
  );
}

export default EpisodePicker;