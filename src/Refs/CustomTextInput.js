import React from 'react'

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
    // 创建一个ref来存储textInput 的DOM元素
    this.textInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
  }

  focusTextInput() {
    console.log('==>>node:', this.textInput.current)
    this.textInput.current.focus()
  }

  render() {
    return (
      <div>
        {/* 告诉React我们要把<input> ref关联到构造器里创建的textInput上 */}
        <input type="text" ref={this.textInput} />
        <input type="button" value='Focus the text input' onClick={this.focusTextInput} />
      </div>
    )
  }
}

export default CustomTextInput 