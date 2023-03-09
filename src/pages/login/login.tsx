/*
 * @Author: wei yin
 * @Date: 2023-02-16 17:36:08
 * @LastEditors: wei yin
 * @LastEditTime: 2023-03-09 10:35:54
 * @Description:
 */
import React from 'react'
import './index.css'
import { Button, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const navigate = useNavigate()

  const navTo = (url: string) => {
    navigate(url, { state: { name: 'zhou' } })
  }
  return (
    <div className='login'>
    <div className="login-box">
      <div className="login-box-form">
        <Input className='input' size="large" placeholder="请输入用户名" prefix={<UserOutlined style={{ color: '#00c4b7' }} />} />
        <Input.Password className='input' placeholder="请输入密码" prefix={<LockOutlined style={{ color: '#00c4b7' }} />} />
      </div>
      <Button className='btn' onClick={() => {
        navTo('/index')
      }}>登录</Button>
    </div>
    </div>
  )
}
export default Login
