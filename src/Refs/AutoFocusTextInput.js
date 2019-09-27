import React from 'react'
import CustomTextInput from './CustomTextInput'

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props)
    this.customTextInput = React.createRef()
  }

  componentDidMount() {
    this.customTextInput.current.focusTextInput()
  }
  render() {
    return(
      <CustomTextInput ref={this.customTextInput} />
    )
  }
}

export default AutoFocusTextInput 