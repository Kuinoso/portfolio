import React, { useState } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('english');

  return (
    <HashRouter basename='/' >
      <Route exact path="/" render={() => <Welcome language={language} setLanguage={setLanguage}/>} />
      <Route path="/portfolio" render={() => <Navbar language={language} setLanguage={setLanguage}/>} />
      <Route exact path="/portfolio/about" render={() => <About language={language}/>} />
      <Route exact path="/portfolio/projects" render={() => <Projects language={language}/>} />
      <Route exact path="/portfolio/contact" render={() => <Contact language={language}/>} />
      <Route path="/portfolio" render={() => <Footer language={language} setLanguage={setLanguage}/>} />
    </HashRouter>
  );
};

export default App;
