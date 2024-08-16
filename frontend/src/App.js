import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage';
import ChatApp  from './components/ChatApp';
import ProtectedRoute from './components/ProtectedRoute';
import EmailResponse from './components/EmailResponse';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <ChatApp />
            </ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify-email" element={<EmailResponse />} />
          <Route path="*" element={
            <ProtectedRoute>
              <Navigate to="/"/>
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
