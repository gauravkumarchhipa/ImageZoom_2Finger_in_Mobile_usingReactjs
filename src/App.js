import ImageZoom from "./components/ImageZoom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ImageZoom/>}/>
        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
