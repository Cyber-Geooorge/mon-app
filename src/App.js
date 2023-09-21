import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Page1</Link>
            </li>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
