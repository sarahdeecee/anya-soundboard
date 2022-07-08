function SampleButtonMini(props) {
  const {english, romaji, japanese, keypress, file, picture, selectedSamples, setSelectedSamples, mode} = props;
  const sample = {english, romaji, japanese, keypress, file, picture};

  const addSample = sample => {
    setSelectedSamples({sample, type: 'add'});
  }
  const removeSample = sample => {
    setSelectedSamples({sample, type: 'remove'});
  }
  console.log(picture);

  const handleSample = () => {
    (selectedSamples.includes(sample)) ? removeSample(sample) : addSample(sample);
  }

  const sampleImg = <img 
    id={`mini-${keypress}`}
    src={picture}
    srcSet={picture}
    alt={english}
    onClick={handleSample}
  />
  
  return (<>
      {sampleImg}
    </>
  );
}

export default SampleButtonMini;