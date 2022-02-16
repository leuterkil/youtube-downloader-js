import './App.css';
import ListCard from './components/ListCard';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
    
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/video/:videoId" element={<Video />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
