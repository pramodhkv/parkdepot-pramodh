import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";

function App() {
  return (
    <div className="App bg-body text-white font-montserrat h-screen">
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
