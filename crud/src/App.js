import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Students from './components/Students';
import Campuses from "./components/Campuses"
import CreateCampus from "./components/CreateCampus"
import CreateStudent from './components/CreateStudent'

function App() {
  return (

    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/createstudent" element={<CreateStudent />} />
          <Route path="/createcampus" element={<CreateCampus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
