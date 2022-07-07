// Available keys for soundboard
const keyboardShort = [
  'q', 'w', 'e', 'r', 't', 'y',
  'a', 's', 'd', 'f', 'g', 'h',
  'z', 'x', 'c', 'v', 'b', 'n',
];
const keyboardLong = [
  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'
];

// Choose keys closest to each other
const addKeypress = selectedSamples => {
  
  // Add keypress for each sample
  const samplesWithKeypress = selectedSamples.map((sample, index) => {
    if (index < keyboardShort.length) {
      return {...sample, keypress: keyboardShort[index]};
    } else {
      // If selected samples exceed 3 rows of 6, use full keyboard
      return {...sample, keypress: keyboardLong[index]};
    }
  })

  return samplesWithKeypress;
};

export default addKeypress;