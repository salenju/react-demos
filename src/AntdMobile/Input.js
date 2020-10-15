import React from 'react'
import { InputItem, List } from 'antd-mobile'
import { createForm } from 'rc-form'
import styled from 'styled-components'

let moneyKeyboardWrapProps
moneyKeyboardWrapProps = {
  onTouchStart: (e) => e.preventDefault(),
}

const Input = createForm()((props) => {
  const { getFieldProps, getFieldDecorator } = props.form
  const FormatMoney = (value) => {
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return value
  }

  return (
    <Wrapper>
      <List>
        <InputItem
          {...getFieldProps('money2', {
            normalize: (v, prev) => {
              v = v.replace(/,/g, '')
              if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                if (v === '.') {
                  return '0.'
                }
                return prev
              }
              console.log('--->v', v)
              return FormatMoney(v)
            },
          })}
          type="money"
          onVirtualKeyboardConfirm={(v) =>
            console.log('onVirtualKeyboardConfirm:', v)
          }
          clear
          moneyKeyboardWrapProps={moneyKeyboardWrapProps}
        >
          数字键盘
        </InputItem>
      </List>
    </Wrapper>
  )
})

const Wrapper = styled('div')`
  .fake-input {
    height: 20px;
    border-bottom: 1px solid #f40;
  }
`

export default Input
