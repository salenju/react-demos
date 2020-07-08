import React from 'react'

class LifeCycle extends React.Component {
  constructor() {
    super()
    this.state = { n: 0 }
    console.log('1=>constructor')
  }

  componentWillMount() {
    /**
     * 在此处：
     * - 直接setState修改数据,例如this.setState({ n: this.state.n + 1 })，会在state改变后执行render——>componentDidMount
     * - 异步操作中setState修改数据（如：定时器、服务端数据获取），则是先执行render——>componentDidMount，接着走update的流程，
     *   如此一来和放到componentDidMount中没有什么区别，所以一般把请求放到componentDidMount中
     *
     */

    console.log('2=>componentWillMount', this.state.n)
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ n: this.state.n + 1 })
    }, 2000)
    console.log('4=>componentDidMount', this.state.n)
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * 此时这里获得的state不是最新修改的，而是上一次的state
     *
     * 该方法接受2个参数：
     * - nextProps:最新修改的属性信息
     * - nextState:最新修改的状态信息
     */
    console.log('5=>shouldComponentWillUpdate', this.state.n, nextState)
    if (nextState.n > 3) {
      return false
    }
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    // 这里的state是更新之前的state（和shouldComponentUpdate一样接受nexrProps、nextState作为参数）
    console.log('6=>componentWillUpdate', this.state.n, nextState)
  }

  componentDidUpdate() {
    // 这里的state是更新之后的state
    console.log('7=>componentDidUpdate', this.state.n)
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('8=>componentWillReceiveProps', this.props, nextProps)
  }

  render() {
    console.log('3=>render')
    return <>{this.props.m}</>
  }
}

export default class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      m: 1,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ m: 2 })
    }, 2000)
  }

  render() {
    return (
      <div>
        <LifeCycle m={this.state.m} />
      </div>
    )
  }
}
