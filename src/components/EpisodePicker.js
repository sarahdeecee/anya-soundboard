import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

function EpisodePicker(props) {
  // const {theme, setTheme} = props;
  const [checked, setChecked] = useState({
    1: false,
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
    12: false,
});
  
  const handleCheck = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    setChecked({...checked, [e.target.value]: e.target.checked});
  };
  const handleCheckAll = (e) => {
    // setChecked([e.target.checked, e.target.checked]);
  };

  const numberOfEpisodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  const episodeList = numberOfEpisodes.map((episode) => <FormControlLabel
    key={episode}
    label={`Episode ${episode}`}
    value={episode}
    control={<Checkbox checked={checked[episode]} onChange={handleCheck} />}
  />)

  return (<>
    <FormControlLabel
      label="Parent"
      control={
        <Checkbox
          checked={Object.keys(checked).includes(true) && !Object.keys(checked).includes(false)}
          indeterminate={Object.keys(checked).includes(true) && Object.keys(checked).includes(false)}
          onChange={handleCheckAll}
        />
      }
    />
    {episodeList}
    </>
  );
}

export default EpisodePicker;