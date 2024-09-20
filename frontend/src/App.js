import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import ChatApp  from './pages/ChatApp';
import ProtectedRoute from './components/ProtectedRoute';
import EmailPage from './pages/EmailPage';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <ChatApp />
            </ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<EmailPage />} />
          <Route path="*" element={
            <ProtectedRoute>
              <Navigate to="/"/>
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
