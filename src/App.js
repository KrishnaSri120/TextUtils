import './App.css';
import About from './components/About';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch as Switch,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const obj = { title: "TextUtils", about: "About Us" };
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar data={obj} mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert}/>
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<TextForm heading='Enter the text for analyze' mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About  mode={mode}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
