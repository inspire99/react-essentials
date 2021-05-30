import React, {useState} from 'react';
import './App.css';




function App({authorized}) {
  const [emotion] = useState("happy");
  console.log(emotion);
  return(
    <>
    <h1>Hello</h1>
    </>
  );
  
}

export default App;
