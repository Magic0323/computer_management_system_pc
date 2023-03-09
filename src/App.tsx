/*
 * @Author: wei yin
 * @Date: 2023-02-16 16:40:30
 * @LastEditors: wei yin
 * @LastEditTime: 2023-03-08 16:16:42
 * @Description:
 */
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Layout from './pages/layout/layout'
import ComputerInfomation from './pages/computerInfomation/ComputerInformation'

function App () {
  return (
    <div className="App">
      {/* <HashRouter> */}
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/index' element={<Layout/>}>
            <Route index element={<ComputerInfomation/>}></Route>
            <Route path='computerInfomation' element={<ComputerInfomation/>}></Route>
          </Route>
        </Routes>
      {/* </HashRouter> */}
    </div>
  )
}

export default App
