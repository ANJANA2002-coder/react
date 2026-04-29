import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:name" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;