import React, { Component } from 'react'
import Login from './pages/Login'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
/*
应用根组件
*/
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Login}></Route>
        </Switch>
      </BrowserRouter>
     )
    }
  }
  export default App