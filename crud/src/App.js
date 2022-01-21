import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Students from './components/Students';


function App() {
  return (
    
    <Router>
      <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
      

      </Routes>
    </div>
    </Router>
  );
}

export default App;
