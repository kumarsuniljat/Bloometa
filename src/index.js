import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Transfer from "./Transfer";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/transfer" element={<Transfer />} />
      </Routes>
    </Router>
  </StrictMode>,
  rootElement
);
