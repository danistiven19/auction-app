/** Third party imports */
import React from 'react';

/** App imports */
import LoginPage from './pages/Login';
import HeaderComponent from './components/Header';
import SignupPage from './pages/Signup';

function App() {
  return (
    <>
      <HeaderComponent />
      <SignupPage />
      <LoginPage />
    </>
  );
}

export default App;
