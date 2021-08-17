import React,{useEffect} from 'react'
import './App.css';
// import { Profile, Login, Register,Expenses, Income,TodoList, Landing } from './pages'
import { Landing, Login, Register } from './pages'

import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {checkState} from './components/utils';
import Home from './pages/Home';

function App() {

  useEffect(()=> {
    checkState();
  },[])

  return (
    <div className="App">

          <BrowserRouter >

            <Switch>

                <Route exact path = '/login' component = {Login}/>
                <Route exact path = '/register' component = {Register}/> 
                <Route exact path = '/profile' component = {Home}/>
                <Route exact path = '/' component = {Landing}/>

                <Redirect to  ="/" />
            </Switch>
          </BrowserRouter>

    </div>
  );
}


export default App;
