import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Welcome from './components/Welcome';

function App() {
  return (
    <HashRouter basename='/' >
      <Route exact path="/" render={() => <Welcome />} />
    </HashRouter>
  );
};

export default App;
