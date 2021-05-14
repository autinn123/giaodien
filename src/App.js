import React, { Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from './components/NotFound'
import Header from './components/Header'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


const HomePage = React.lazy(() => import('./features/HomePage'));
const Login = React.lazy(() => import('./features/Auth/components/Login'));
const Signup = React.lazy(() => import('./features/Auth/components/Signup'));

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}> 
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/homepage" />
        <Route path="/homepage" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Suspense>
  );
}

export default App;
