import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
// import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Story from "./components/Story";
import Footer from "./components/Footer";
function App() {
  return (
    
    <BrowserRouter>
    <Navbar></Navbar>
    
    <Switch>
      {/* <Route path = "/AboutMe" component={ AboutMe} exact></Route> */}
      <Route path = "/" component={AboutMe} exact></Route>
      {/* <Route path = "/Contact" component={Contact} ></Route> */}
    </Switch>
    <Story />
    <Contact />
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
