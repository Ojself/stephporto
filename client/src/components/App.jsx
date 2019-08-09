import React, { Component } from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import logo from '../img/steph_logo.png'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: [],
    }
  }
  /* add easter egg */
  render() {
    return (
      <div className="App">
        <header className="App-header dosis">
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/" exact>
            <img id="imgLogo" src={logo} alt="Stephane" />
          </NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <span id="navLine" />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route
            render={() => (
              <div>
                <h2>404</h2>
                <p>Yikes..</p>
              </div>
            )}
          />
        </Switch>
        <span id="navLine" />
        <footer>
          <p>&copy;{new Date().getFullYear()}</p>
        </footer>
      </div>
    )
  }
}
