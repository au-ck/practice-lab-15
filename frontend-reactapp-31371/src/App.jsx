import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";  // ✅ matches component name

function App() {
  return (
    <BrowserRouter>
      <NavBar />  {/* ✅ correct casing */}
    </BrowserRouter>
  );
}

export default App;
