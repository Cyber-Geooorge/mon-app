import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { MatomoProvider, createInstance } from "@datapunt/matomo-tracker-react";
import Page1 from "./Page1";
import Page2 from "./Page2";

const instance = createInstance({
  urlBase: "http://localhost/matomo/", // URL de votre instance Matomo
  siteId: 3, // ID du site que vous souhaitez suivre
  trackerUrl: "http://localhost/matomo/matomo.php", // URL du fichier de suivi
  srcUrl: "http://localhost/matomo/matomo.js", // URL du script Matomo
});

function App() {
  return (
    <MatomoProvider value={instance}>
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

          <MyComponent />
        </div>
      </Router>
    </MatomoProvider>
  );
}

export default App;
