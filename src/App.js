import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="404" element={<NotFound />} />
          {/* if not found redirect to 404 page */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
