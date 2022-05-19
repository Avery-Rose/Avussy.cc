import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { NextUIProvider, createTheme } from "@nextui-org/react";

import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import NotFound from "./pages/404/NotFound";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#ff66ff",
      secondary: "#6685FF",
      text: "#fff",
      primaryShadow: "#ff66ff",
      secondaryShadow: "#6685FF",
      background: "#07101d",
      backgroundSecondary: "#0a0c2f",
      link: "#fff",
      primaryInput: "#fff",
      primaryLightContrast: "#fff",
    },
    zIndices: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      max: "9999",
    },
  },
});

/*const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#ff66ff",
      secondary: "#6685FF",
      text: "#000000",
      primaryShadow: "#ff66ff",
      background: "#74A2E1",
    },
  },
});*/

function App() {
  return (
    <NextUIProvider theme={darkTheme}>
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
    </NextUIProvider>
  );
}

export default App;
