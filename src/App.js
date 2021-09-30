import logo from "./logo.svg";
import "./App.css";
import Pokemon from "./components/pokemon/pokemon";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const toggleModal = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <Pokemon />
    </div>
  );
}

export default App;
