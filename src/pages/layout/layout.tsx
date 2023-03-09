/*
 * @Author: wei yin
 * @Date: 2023-03-06 16:30:15
 * @LastEditors: wei yin
 * @LastEditTime: 2023-03-06 16:43:59
 * @Description:
 */
import React from 'react'
import { Outlet } from 'react-router-dom'
import './layout.css'
const Layout: React.FC = () => (
  <div className="layout">
    <img className='head' src={require('../../assets/images/head.png')} />
    layout
    <Outlet />
  </div>
)
export default Layout
