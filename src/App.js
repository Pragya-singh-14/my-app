import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Appointment from './Components/Appointment/Appointment';


const App = () => {
  

  return (
    <div>
      <main>
      <Router>
     <Switch>
      <Route path='/'  exact component={Login}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/appointment'  exact component={Appointment}></Route>
      </Switch>
    
      </Router>
      </main>
    </div>
  );
};

export default App;
