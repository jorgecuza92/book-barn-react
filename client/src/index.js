import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BaseLayout } from './components/BaseLayout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieListPage from './components/MovieListPage';
import AddMoviePage from './components/AddMoviePage';
import Register from './components/Register'
// BOOTSTRAP //
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path = '/register' component = {Register} />
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/movies' component = {MovieListPage} />
          <Route exact path = '/add-movie' component = {AddMoviePage} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
