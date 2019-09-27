import React from 'react'
import { Link, Router } from 'react-router-dom'

const Link01 = () => {

  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to='/effect-hook'>EffectHook</Link></li>
            <li><Link to='/state-hook'>StateHook</Link></li>
          </ul>
        </nav>
      </header>
    </Router>
  )
}

export default Link01