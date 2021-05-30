
import './App.css';


function SecretComponent(){
  return(
    <h1>Only authorized users can view secret information</h1>
  );
}

function RegularComponent(){
  return(
    <h1>Everyone can see this component</h1>
  );
}


function App(props) {
  if(props.authorized){
    return <SecretComponent />;
  }
  else{
    return <RegularComponent />;
  }
  
}

export default App;
