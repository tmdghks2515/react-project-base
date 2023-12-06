import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MainLayout from './components/layouts/MainLayout';
import LoginLayout from './components/layouts/LoginLayout';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<MainPage />} />
      </Route>
      <Route element={<LoginLayout />}>
        <Route path='/login' element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
