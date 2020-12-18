import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Components/Navbar';
import {Switch, Redirect, Route } from 'react-router';
import Games from './Components/Games';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import SubziGame from './Components/SubziGame';
import About from './Components/About';
import Join from './Components/Join';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <SubziGame />
      <About />
      <Join />
      <Footer />

      <Switch>
        {/* <Route exact path='/' component={Home}></Route> */}
        <Route exact path='/Games' component={Games}></Route>
        <Route exact path='/Gallary' component={Gallery}></Route>
        <Redirect to='/'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
