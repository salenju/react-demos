import React from 'react'

class CallbackRef02 extends React.Component {
  state = {
    a: 1,
  }

  constructor(props){
    super(props)
    this.refCallback = this.refCallback.bind(this)
  }

  componentDidMount() {
    this.setState({
      a: 2,
    })
  }

  refCallback(dom){
    console.log(dom)  // <div></div>
  }

  render() {
    return (
      <div ref={this.refCallback}>
      </div>
    )
  }
}

export default CallbackRef02