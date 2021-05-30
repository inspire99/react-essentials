
import './App.css';
import restaurant from './restaurant.jpg'


function Header(props){
  return(
      <header>
          <h1>{props.name}'s Kitchen</h1>
      </header>
  );
}

const dishes = [

  "Chapathi and Paneer curry",
  "Bread and jam",
  "Idli and vada",
  "Mutter paneer parotta"

];


// transformation function
const dishObject = dishes.map((dish,i) => ({id:i,title:dish}));


function Main(props){
  return(
    
    <section>
      <p>We serve the most {props.adjective} food around</p>
      <img src={restaurant} height="200" alt="napkin and fork at a restaurant table"/>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish)=> <li key={dish.id}>{dish.title}</li>)}
      </ul>
    </section>
  );
}

function Footer(props){
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Sai"/>
      <Main adjective="amazing" dishes={dishObject}/>
      
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
