import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Topic = ({ match }) => <h3>Requested Params:{match.params.id}</h3>
const Topics = ({ match }) => {
  console.log('--->', match)
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        path={match.path}
        exact
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
}

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
)

const Router02 = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

export default Router02