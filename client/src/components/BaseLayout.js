import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import App from './App'
import './MovieListStyles.css'
import Navbar from 'react-bootstrap/Navbar'

export class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Menu />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

export class Menu extends Component {
  render() {
    return(
      <div>
        <Navbar expand='lg' className='flex-column'>
          <NavLink to = '/register'><div>Register</div></NavLink>
          <NavLink to = '/'><div>Home</div></NavLink>
          <NavLink to = '/movies'><div>Movies Catalog</div></NavLink>
          <NavLink to = '/add-movie'><div>Add Movie</div></NavLink>
        </Navbar>
      </div>
    )
  }
}
export class Footer extends Component {
  render() {
    return  (
      <h1>Copyright 2021 | Privacy | Terms and Conditions</h1>
    )
  }
}