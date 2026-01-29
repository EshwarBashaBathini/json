import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import PostDetails from './components/PostDetails';
import Posts from './components/posts';
import './App.css'


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/users/:userId" element={<Home />} />
        <Route exact path="/" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  )
}

export default App
