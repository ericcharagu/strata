import "./App.css";
import { BrowserRouter as Router, Route, Routes, path } from "react-router-dom";
import Cover from "./components/cover";
import NavBar from "./components/nav";
import About from "./components/about";
import Models from "./components/projects";
import Building from "./components/building";
import Projects from "./components/projects";
import Footer from "./components/footer";
import AllProjects from "./components/allProjects";
import QuoteGen from "./components/quote";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<QuoteGen />}></Route>

          {/*   <Route path="/about" element={<About />}></Route>
          <Route path="/archmodels" element={<Models />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/all-projects" element={<AllProjects />}></Route>
          <Route path="/building" element={<Building />}></Route> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
