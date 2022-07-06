import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

function EpisodePicker(props) {
  const {checked, setChecked} = props;


  const numberOfEpisodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleCheck = (e) => {
    setChecked({...checked, [e.target.value]: e.target.checked});
  };
  const handleCheckAll = (e) => {
    console.log('checked',e.target.checked);
    console.log('indeterminate',e.target.indeterminate);
    Object.values(checked).includes(true) ? setChecked({1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      12: false})
      : setChecked({1: true,
        2: true,
        3: true,
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        10: true,
        11: true,
        12: true,});
  };
  
  const episodeList = numberOfEpisodes.map((episode) => <FormControlLabel
    key={episode}
    label={`Episode ${episode}`}
    value={episode}
    control={<Checkbox checked={checked[episode]} onChange={handleCheck} />}
  />)

  return (<>
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
    {episodeList}
    </>
  );
}

export default EpisodePicker;