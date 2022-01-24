import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Students from './components/Students';
import Campuses from "./components/Campuses"
import CreateCampus from "./components/CreateCampus"
import CreateStudent from './components/CreateStudent'
import SingleCampus from './components/SingleCampus';
import { useState } from "react";

function App() {
  const [dummyCampuses, setDummyCampuses] = useState([{name:"Brooklyn College", imgURL:"brooklyImg.net", address:"4442 E Lane",description:"Best School in BKLYN!",createdAt:"12-12-2022", updatedAt:"12-30-2020"},{name:"Lehman College", imgURL:"brooklyImg.net", address:"3 E Lane",description:"A School!",createdAt:"12-12-2022", updatedAt:"12-30-2020"},{name:"City College", imgURL:"brooklyImg.net", address:"90 K Lane",description:"A School in NYC!",createdAt:"12-12-2022", updatedAt:"12-30-2020"}])
  
  return (

    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/campuses" element={<Campuses dummyCampuses={dummyCampuses} setDummyCampuses={setDummyCampuses}/>} />
          <Route path="/createstudent" element={<CreateStudent />} />
          <Route path="/createcampus" element={<CreateCampus />} />
          {/* as the comment in SingleCampus explains, the below
          line would be better as a function that created a Route for 
          every campus in the campus state, it's the same for the individual student 
          view.  */}
          <Route path="/campuses/:campusId" element={<SingleCampus />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
