// Available keys for soundboard
const keyboard = {
  row1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  row2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
  row3: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
};

// Choose keys closest to each other
const addKeypress = selectedSamples => {
  // Calculate length for each keyboard row
  const rowLength = Math.ceil(selectedSamples.length / 3);
  
  // Add keypress for each sample
  const samplesWithKeypress = selectedSamples.map((sample, index) => {
    // First keyboard row
    if (index < rowLength) {
      return {...sample, keypress: keyboard.row1[index]}
    }
    // Second keyboard row
    if (index >= rowLength && index < rowLength * 2) {
      return {...sample, keypress: keyboard.row2[index - rowLength]}
    }
    // Third keyboard row
    if (index >= rowLength * 2 && index < rowLength * 3) {
      return {...sample, keypress: keyboard.row3[index - rowLength * 2]}
    }
  })

  return samplesWithKeypress;
};

export default addKeypress;