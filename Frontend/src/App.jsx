import React from 'react'
import Home from './home/Home';
import { Route, Routes } from "react-router-dom"
import Books from './books/Books';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </>
  )
}

export default App;
