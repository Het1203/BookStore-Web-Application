import React from 'react'
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom"
import Books from './books/Books';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={authUser ? <Books /> : <Navigate to="/signup" />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App;
