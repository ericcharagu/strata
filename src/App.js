import "./App.css";
import { BrowserRouter as Router, Route, Routes, path } from "react-router-dom";
import Cover from "./components/cover";
import NavBar from "./components/nav";
import Arch from "./components/arch";
import Energy from "./components/energy";
import Contacts from "./components/contacts";
import Visuals from "./components/visual";
import Models from "./components/projects";
import Renders from "./components/renders";
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Cover />}></Route>
          <Route path="/arch" element={<Arch />}></Route>
          <Route path="/energy" element={<Energy />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/visuals" element={<Visuals />}></Route>
          <Route path="/archmodels" element={<Models />}></Route>
          <Route path="/renders" element={<Renders />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
