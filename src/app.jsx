import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const Home = () => (
  <h2>Home!</h2>
)

const App = () => (
  <Router>
    <div className='app'>
      <h1>Hello!</h1>
      <Link to='/home'> Go to Home </Link>
      <Route path='/home' component={Home} />
      <a>ir a /</a>
    </div>
  </Router>
)

export default App
