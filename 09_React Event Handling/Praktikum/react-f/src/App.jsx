import { useState, useEffect } from "react";
import "./App.css";
import "./createProduct.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Form />
    </div>
  );
}

export default App;