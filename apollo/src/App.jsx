import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Info } from "./components";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search" exact element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;
