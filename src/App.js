import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'

/*
应用根组件
*/
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
     )
    }
  }
  export default App