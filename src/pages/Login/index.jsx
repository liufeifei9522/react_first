import React, { Component } from 'react'
import {
  Form, Input, Button,
  } from 'antd'
  import { UserOutlined, LockOutlined } from '@ant-design/icons';
  import {reqLogin} from '../../api/index'
import './index.less'
import logo from './images/logo.png'
const Item = Form.Item
class Login extends Component {
  handleSubmit = async (username, password) => {
    console.log('发送登陆的 ajax 请求', username, password)
    const result = await reqLogin(username, password)
    console.log('login()', result)
    }
  render() {
    return (
      <div className="login">
        <header className='login-header'> 
          <img src={logo} alt="logo"/> 
          <h1>React 项目: 后台管理系统</h1>
        </header>
        <section className='login-content'>
        <h3>用户登陆</h3>
        <Form className="login-form" onFinish={this.handleSubmit}>
          <Item name="username" rules={[ { required: true, message: '请输入用户名!'},
          {min:4,message:'长度最小四位'},
          {max:12,message:'长度不得多于十二位'}]}>
             <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Item>
          <Item name="password" rules={[{required: true,  message:'请输入密码!'}]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button> 
          </Item>
        </Form>
        </section>
      </div>
    )
  }
}

export default Login
