import "./App.css";
import Calculator from "./Components/Calculator";
import Modes from "./Components/Modes";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TextFormat from "./Components/TextFormat";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null)
    }, 2500)
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      showalert('Dark Mode has been Enabled', 'success')
    } else {
      setMode("light");
      showalert('Light Mode has been Enabled', 'success')
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="Ratish" about="About US" mode={mode} toggleMode={toggleMode} />    
        <Alert alert={alert}/>
      {/* <Calculator showalert={showalert}/> */}
        {/* <Modes /> */}

        <Routes>
          <Route path="/" element={<TextFormat />} />
          <Route path="/Home" element={<Modes />} />
          <Route path="/About" element={<Calculator showalert={showalert} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
