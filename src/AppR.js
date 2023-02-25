import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a Aldan Store"/>
    </>
  )
}
    
export default App;