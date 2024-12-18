// import logo from './logo.svg';
import './App.css';
  import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, {useState} from 'react';
 import Alert from './components/Alert';
 import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
     setAlert({
      msg: message,
      type:type
     })

     setTimeout(() =>{
      setAlert(null);
     }, 1500);
  }


  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-danger')
  // }
  const toggleMode = ()=>{
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0e2d4f';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    // document.title = "TextUtils - Light Mode";
  }
}
  return (
    <>
 <HashRouter>
        <Navbar
          title="TextUtils"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About showAlert={showAlert}
                  mode={mode}/>}></Route>
            <Route
              exact path="/"
              element={
                <TextForm 
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </HashRouter>
</>
  );
}

export default App;
