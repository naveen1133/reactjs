// App.js
import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import SignUp from './SignUp';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      {showLogin ? (
        <>
          <Login />
          <p className="toggle-link" onClick={() => setShowLogin(false)}>Don't have an account? Sign Up</p>
        </>
      ) : (
        <>
          <SignUp />
          <p className="toggle-link" onClick={() => setShowLogin(true)}>Already have an account? Login</p>
        </>
      )}
    </div>
  );
}

export default App;
