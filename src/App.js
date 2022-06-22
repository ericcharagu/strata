import "./App.css";
import { BrowserRouter as Router, Route, Routes, path } from "react-router-dom";
import Cover from "./components/cover";
import NavBar from "./components/nav";
import Services from "./components/services";
import Mood from "./components/mood";
import Energy from "./components/energy";
import About from "./components/about";
import Models from "./components/projects";

import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Cover />}></Route>
          <Route path="/energy" element={<Energy />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/archmodels" element={<Models />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
