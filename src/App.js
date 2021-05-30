import React, { useEffect, useState} from 'react';
import './App.css';

// https://api.github.com/users/inspire99

function App({login}) {

  const [data,setData] = useState(null);

  useEffect(
    () => {
      fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
    },[login]
  );
  
  if(data){
    return ( 
      <div>
        <h1>{data.name}</h1>
        <img alt={data.login} src={data.avatar_url}/>
        <p>{data.location}</p>
      </div>
    );
  }

  return(
  <div>No User available</div>
  );
  
}

export default App;
