import React from 'react';
import {LoginPage,StarterQuery} from './LoginPage';
import Navbar from './homepage';

function App() {
  return (
    <div className="App">
      <StarterQuery/>
      <LoginPage />
      <Navbar />

    </div>
  );
}

export default App;