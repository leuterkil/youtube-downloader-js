import logo from './logo.svg';
import './App.css';
import ListCard from './components/ListCard';
import Searchbar from './components/Searchbar';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
    <Searchbar/>
    {/* <ListCard title="ΛΕΞ - VARANE" thumbnail="https://volte-tel.gr/uploadimages/sync_images/69214/main.jpg"/> */}
    </div>
  );
}

export default App;
