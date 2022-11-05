
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import CustomCounter from "./Components/customcounter";
import Useddreduce from "./Components/usereducer";
import NavBar from "./Components/Navlink";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import TestErrBoundary from "./Components/TestErrBoundary";
import { HelmetProvider } from "react-helmet-async";








function App() {



  
  const Testing = () => {
    return (
      <div>
        <h1>This is the testing page....</h1>
        </div>
    )
  }
  



  return (
    
<HelmetProvider>

    <div>
      <Router>
        <NavBar/>
       <Routes>
        <Route path= "/" element={ <Home/> }/>
        <Route path= "/customhook" element={ <CustomCounter/> }/>
        <Route path= "/usereduce" element={  <Useddreduce/> }/>
        <Route path= "/testingerror" element={  < TestErrBoundary/> }/> 
        <Route path= "*" element={  < ErrorPage/> }/> 
      </Routes>
      </Router>

    </div>
    </HelmetProvider>
  

  );












}

export default App;
