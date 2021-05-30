
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
  return(
    <>
    {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  );
  
}

export default App;
