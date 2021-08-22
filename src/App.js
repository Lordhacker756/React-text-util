import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import About from './Components/About';
import './style.css'


function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () =>
  {
    if(mode === 'dark')
    {
      setMode('light');
      document.body.style.background="white";
      showAlert("✅ Light Mode Set Sucessfully! 😇");
    }
    else
    {
      setMode('dark');
      document.body.style.background="#212529";
      showAlert("✅ Dark Mode Set Sucessfully! 😎");
    }
  }

  const [alert, setalert] = useState(null)

  const showAlert = (message) =>
  {
    setalert(message);
    setTimeout(()=>setalert(null),1500);
  }


  return (
<>
<Router>
<Navbar theme={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
        <Switch>
          <Route exact path="/about">
            <About theme={mode} toggleMode={toggleMode}/>
          </Route>
          <Route exact path="/">
          <TextArea theme={mode} toggleMode={toggleMode} showAlert={showAlert}/>
          </Route>
        </Switch>
</Router>
</>
  );
}

export default App;
