import React from 'react'

const ThemeContext = React.createContext('light');

class Context01 extends React.Component {

  render() {
    return (
      <ThemeContext.Provider value='dark'>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

const Toolbar = (props) => {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

Const TestData = (props) => {
  return(
    <div></div>
  )
}

class ThemeButton extends React.Component {
  componentDidMount() {
    console.log('====>>>', this.context)
  }
  render() {
    return (
      <button theme={this.context} />
    )
  }
}

export default Context01
