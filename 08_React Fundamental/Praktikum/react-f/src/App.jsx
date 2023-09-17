import { useState, useEffect } from "react";
import "./App.css";
import "./createProduct.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./src/script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Form />
    </div>
  );
}

export default App;