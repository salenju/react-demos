import React from 'react'
import { Form, InputNumber, Input, Button } from 'antd'

import Store from './Store'

const FormItem = Form.Item

const AntdForm = Form.create()((props) => {
  const { validateFields, getFieldDecorator } = props.form
  const { state, actions } = Store

  const handleSubmit = (e) => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        console.log('---->values:', values)
      }
    })
  }

  const validateToNextPassword = (rule, value, callback) => {
    const form = props.form
    if (value && state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  // 校验前后两次密码是否一致
  const compareToFirstPassword = (rule, value, callback) => {
    const form = props.form
    console.log('---->', form.getFieldValue('from'))
    if (value && (value < 10 || value < form.getFieldValue('from'))) {
      let msg = '后面的值要大于前面的值'
      callback(msg)
    } else {
      callback()
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem label="Test">
        <FormItem>
          {getFieldDecorator('from', {
            rules: [
              {
                validator: (rule, value, callback) =>
                  validateToNextPassword(rule, value, callback),
              },
            ],
          })(<InputNumber min={10} precision={1} />)}
        </FormItem>
        -
        <FormItem>
          {getFieldDecorator('to', {
            rules: [
              {
                required: false,
                message: '请输入',
              },
              {
                validator: (rule, value, callback) =>
                  compareToFirstPassword(rule, value, callback),
              },
            ],
          })(
            <InputNumber precision={1} onBlur={(e) => actions.handleConfirmBlur(e)} />
          )}
        </FormItem>
      </FormItem>
      <FormItem>
        <Button htmlType="submit">Submit</Button>
      </FormItem>
    </Form>
  )
})

export default AntdForm
