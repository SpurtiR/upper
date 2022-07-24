

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(50 60 76)"
      showAlert("Dark Mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "#fff"
      showAlert("Light Mode has been enabled", "success")
    }
  }


  return (
    <>



      <BrowserRouter>

        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">


        <Routes>
          <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter your Text" mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />

        </Routes>
        </div>
      </BrowserRouter>


   

    </>

  );
}

export default App;


