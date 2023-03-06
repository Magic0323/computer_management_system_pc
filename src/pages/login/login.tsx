import React from 'react'
import './index.css'
import { Button, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login: React.FC = () => (
  <div className='login'>
  <div className="login-box">
    <div className="login-box-form">
      <Input className='input' size="large" placeholder="请输入用户名" prefix={<UserOutlined style={{ color: '#00c4b7' }} />} />
      <Input.Password className='input' placeholder="请输入密码" prefix={<LockOutlined style={{ color: '#00c4b7' }} />} />
      {/* <Input className='input' size="large" placeholder="请输入密码" type='password' prefix={<LockOutlined style={{ color: '#00c4b7' }} />} /> */}
    </div>
    <Button className='btn'>登录</Button>
  </div>
  </div>
)
export default Login
