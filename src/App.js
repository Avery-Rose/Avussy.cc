import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="404" element={<NotFound />} />
          {/* if not found redirect to 404 page */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
