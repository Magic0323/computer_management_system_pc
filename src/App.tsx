/*
 * @Author: wei yin
 * @Date: 2023-02-16 16:40:30
 * @LastEditors: wei yin
 * @LastEditTime: 2023-03-05 20:41:04
 * @Description:
 */
import React from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'

function App () {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
