import React from 'react'

export default class LocalClock extends React.Component {
  constructor() {
    super()

    // 初始化组件状态
    this.state = {
      time: new Date().toLocaleString(),
    }
  }

  componentDidMount() {
    setInterval(() => {
      /**
       * setState修改组件状态：
       * - 修改部分状态：将传入的内容与老的内容比较，只改变变化部分的状态
       * - 当状态修改完成，会通知React重新渲染组件
       *
       */
      this.setState({
        time: new Date().toLocaleString(),
      })
    }, 1000)
  }

  render() {
    return (
      <section>
        <h3>当前北京时间：</h3>
        <div style={{ color: 'red', fontWeight: 'bold' }}>
          {this.state.time}
        </div>
      </section>
    )
  }
}
