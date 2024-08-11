import React from 'react'
import Home from './home/Home';
import { Route, Routes } from "react-router-dom"
import Books from './books/Books';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App;
