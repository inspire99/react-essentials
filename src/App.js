import React, {useEffect, useState} from 'react';
import './App.css';





function App({authorized}) {

  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect( () => {
    console.log(`It's ${emotion} here`);
  },[emotion]
  

  );

  useEffect( () => {
    console.log(`It's ${secondary} here`);
  },[secondary]

  );
  

  return(
    <>
    <h1>Current state of emotion is {emotion} and {secondary}</h1>
    <button onClick={() => setEmotion("happy")}>
      Make Happy
    </button>
    <button onClick={() => setSecondary("crappy")}>
      Make crappy
    </button>
    <button onClick={() => setEmotion("frustrated")}>
      Frustrated
    </button>
    <button onClick={() => setEmotion("enthusiastic")}>
      Enthuse
    </button>
    </>
  );
  
}

export default App;
