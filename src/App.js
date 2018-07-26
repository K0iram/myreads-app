import React from 'react'
import { Link, Route } from 'react-router-dom'

import './App.css'

class App extends React.Component {

  render() {
    return (
      <div className="app">
        { this.props.children }
      </div>
    )
  }
}

export default App
