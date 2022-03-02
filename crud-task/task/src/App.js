import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/home'
import AllUsers from './components/AllUsers'

import './App.css';
import Editusers from './components/Editusers';
import AddUser from './components/AddUser';

function App() {
  return (
    <BrowserRouter>
    <Home/>
    <Switch>
      <Route exact path='/allusers' component={AllUsers}/>
      <Route exact path='/adduser' component={AddUser}/>
      <Route exact path='/editusers/:id' component={Editusers}/>
    </Switch>
    </BrowserRouter>
   
  );
}

export default App;
