import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const alertDispaly = (message,type) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500 );
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#043a45';
      alertDispaly("Dark mode has been enable","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      alertDispaly("Light mode has been enable","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Texter" about="about us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/About">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm alertDisplay = {alertDispaly} heading="Type your text here" mode={mode} alert={alert} alertDispaly={alertDispaly}/>
          </Route>
        </Switch>
       </div>
       </Router>
    </>
  );
}

export default App;
