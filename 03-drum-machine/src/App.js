import './App.css';
import './styles/theme.scss';
import DrumMachine from './components/DrumMachine';
import Menu from './components/Menu';
import { useState, useEffect } from "react";

function App() {
  const [sample, setSample] = useState({});
  const [theme, setTheme] = useState({
    mode: 'light',
    language: 'english'
  });
  const [showTransition, setShowTransition] = useState({
    display: false,
    button: false
  });

  function playAudio(url) {
    new Audio(url).play();
  }

  // useEffect(() => {
  //   document.body.addEventListener('keydown', handleKeyPress );

  //   return function cleanup() {
  //       window.removeEventListener('keydown', handleKeyPress );
  //   } 
  // },[]);

  const samples = [
    { english: 'So exciting...!',
      romaji: 'wakuwaku...!',
      japanese: 'ワクワク...!',
      keypress: 'q', 
      file: '../../wakuwaku1.mp3',
      picture: '../../wakuwaku1.png'
    },
    { english: 'K!',
      romaji: 'ui',
      japanese: 'うい',
      keypress: 'w', 
      file: '../../ui.mp3',
      picture: '../../ui.png'
    },
    { english: 'Bomby bomb, bomby bomb!',
      romaji: 'bakudan bakudan!',
      japanese: '爆弾、爆弾！',
      keypress: 'e', 
      file: '../../bakudanbakudan.mp3',
      picture: '../../bakudan.png'
    },
    { english: 'Peanuts!',
      romaji: 'Peanuts!',
      japanese: 'ピーナッツ！',
      keypress: 'r', 
      file: '../../peanuts.mp3',
      picture: '../../peanuts.png'
    },
    { english: 'So exciting!',
      romaji: 'wa~kuwaku',
      japanese: 'ワ〜クワク',
      keypress: 'a', 
      file: '../../wakuwaku2.mp3',
      picture: '../../wakuwaku2.png'
    },
    { english: 'SO EXCITING!',
      romaji: 'WAKUWAKU',
      japanese: 'ワクワク！！',
      keypress: 's', 
      file: '../../wakuwaku3.mp3',
      picture: '../../wakuwaku3.png'
    },
    { english: 'Ah~',
      romaji: 'Ah~',
      japanese: 'あ〜',
      keypress: 'd', 
      file: '../../aa.mp3',
      picture: '../../aa.png'
    },
    { english: 'Anya is lonely without a mother~',
      romaji: 'Anya, haha inakute samishii',
      japanese: 'アーニャ、母いなくて寂しい',
      keypress: 'f', 
      file: '../../hahainakutesamishii.mp3',
      picture: '../../hahainakutesamishii.png'
    },
    { english: 'Anya longs for a mother~',
      romaji: 'Haha no sonzai koishii',
      japanese: '母の存在恋しい',
      keypress: 'z', 
      file: '../../hahanosonzaikoishii.mp3',
      picture: '../../hahanosonzaikoishii.png'
    },
    { english: 'K',
      romaji: 'ui',
      japanese: 'うい',
      keypress: 'x', 
      file: '../../ui2.mp3',
      picture: '../../ui2.png'
    },
    { english: 'Stock on them peanuts!',
      romaji: 'peanuts kaikondoke!',
      japanese: 'ピーナッツ買い込んどけ！',
      keypress: 'c', 
      file: '../../peanutskaikondoke.mp3',
      picture: '../../peanutskaikondoke.png'
    }
  ];

  const handleKeyPress = e => {
    console.log(e.key);
    setShowTransition({...showTransition, display: !showTransition.display});
    const filteredSample = samples.find(sample => sample.keypress.toLowerCase() === e.key.toLowerCase());
    if (filteredSample) {
      setSample(filteredSample);
      playAudio(filteredSample.file);
    }
  }

  return (
    <div className={`App ${theme.mode}`}>
      <Menu theme={theme} setTheme={setTheme} />
      <DrumMachine sample={sample} setSample={setSample} samples={samples} playAudio={playAudio} handleKeyPress={handleKeyPress} theme={theme} showTransition={showTransition} setShowTransition={setShowTransition} />
    </div>
  );
}

export default App;
