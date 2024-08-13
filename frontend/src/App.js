import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import LoginPage from './components/LoginPage';
import ChatApp  from './components/ChatBox';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <ChatApp />
            </ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={
            <ProtectedRoute>
              <Navigate to="/"/>
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter> 
  );
}

export default App;
