 
import './App.css';
import Nav from './Nav';
import Card from './Card';
import data from './data';

function App() {
  const cards = data.map(item =>
    <Card 
    key={item.id}
    item ={item}/>
    )
  return (
    <div className="App">
      <Nav />
    <center> {cards}</center>
      
     
    </div>
  );
}

export default App;
