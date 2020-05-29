import React from 'react'
import { Form, InputNumber } from 'antd'

const FormItem = Form.Item

const AntdForm = Form.create()((props) => {
  const { validateFields, getFieldDecorator } = props.form

  const handleSubmit = (e) => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        console.log('---->values:', values)
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem label="Test">
        <FormItem>
          {getFieldDecorator('tFrom', {
            rules: [
              {
                required: true,
                message: i18n.Text('chartering.pleaseEnterPassword'),
              },
              {
                validator: (rule, value, callback) =>
                  validateToNextPassword(rule, value, callback),
              },
            ],
          })(<InputNumber />)}
        </FormItem>
        -
        <FormItem>
          {getFieldDecorator('tTO', {
            rules: [
              {
                required: true,
                message: i18n.Text('chartering.pleaseEnterPassword'),
              },
              {
                validator: (rule, value, callback) =>
                  validateToNextPassword(rule, value, callback),
              },
            ],
          })(<InputNumber />)}
        </FormItem>
      </FormItem>
    </Form>
  )
})

export default AntdForm
