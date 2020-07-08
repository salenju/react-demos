import React, { Component } from 'react'

const HOCFactory = (WrappedComponent, data, callback) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: data,
      }
    }

    componentDidMount() {
      callback()
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

const Btns = (props) => {
  const { data } = props
  return <div>{data && data.map((item) => <button>{item}</button>)}</div>
}

const Contents = (props) => {
  const { data } = props
  return (
    <div>
      {data && data.map((item) => <p style={{ color: 'red' }}>{item}</p>)}
    </div>
  )
}

const DATA = ['AA', 'BB', 'CC', 'DD']

const HOCDemo04 = () => {
  const BtnList = HOCFactory(Btns, DATA, () => {
    console.log('创建btn list')
  })
  const ContentList = HOCFactory(Contents, DATA, () => {
    console.log('创建btn list')
  })

  return (
    <div>
      <BtnList />
      <ContentList />
    </div>
  )
}

export default HOCDemo04
