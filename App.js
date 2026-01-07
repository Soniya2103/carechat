import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './homepage';
import Loginpage from './Loginpage';
import Navigation from './Navigation';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout route */}
        <Route element={<Navigation />}>

          {/* Default route */}
          <Route index element={<Navigate to="/login" />} />

          <Route path="login" element={<Loginpage />} />
          <Route path="home" element={<Home />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
