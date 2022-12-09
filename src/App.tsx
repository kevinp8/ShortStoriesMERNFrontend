import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import User from './pages/User'
import PublicStories from './pages/PublicStories'
import Navbar from './components/Navbar'
import AddStory from './pages/AddStory'
import StoryPage from './pages/StoryPage'
import Edit from './pages/Edit'

type Props = {}

const App = (props: Props) => {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/publicStories' element={<PublicStories />} />
        <Route path='/' element={<Navigate to="/publicStories" />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user/:userId' element={<User />} />
        <Route path='/edit/:storyId' element={<Edit />} />
        <Route path='/story/:storyId' element={<StoryPage />} />
        <Route path='/addStory' element={<AddStory />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App