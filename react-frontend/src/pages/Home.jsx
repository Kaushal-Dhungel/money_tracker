import React from 'react';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';
import Expenses from './Expenses';
import Income from './Income';
import TodoList from './TodoList';
import NewNav from '../components/NewNav';
import { BrowserRouter, Route, Switch} from "react-router-dom";


const Home = () => {
    return (
        <>          
        <BrowserRouter >
        <NewNav />
          <Switch>
              <Route exact path = '/income' component = {Income}/>
              <Route exact path = '/profile' component = {Profile}/>
              <Route exact path = '/todolist' component = {TodoList}/>
              <Route exact path = '/expenses' component = {Expenses}/>
              <Route exact path = '/login' component = {Login}/>
              <Route exact path = '/register' component = {Register}/>

          </Switch>
        </BrowserRouter>
        </>
    )
}

export default Home;