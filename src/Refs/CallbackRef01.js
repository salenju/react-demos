import React from 'react'

class CallbackRef01 extends React.Component {
  state = {
    a: 1,
  }

  componentDidMount() {
    this.setState({
      a: 2,
    })
  }

  render() {
    return (
      <div ref={dom => {
        console.log(dom)
        // <div></div>
        // null
        // <div></div>
      }}>
      </div>
    )
  }
}

export default CallbackRef01