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

  const validateToNextPassword = (rule, value, callback) => {
    const form = props.form
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d$@$!%*#?&_]{8,16}$/
    if (!regex.test(value)) {
      let msg = i18n.Text('myaccount.common.use8to16CharactersForYourPassword')
      callback(msg)
    }
    if (value && store.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  // 校验前后两次密码是否一致
  const compareToFirstPassword = (rule, value, callback) => {
    const form = props.form
    if (value && value !== form.getFieldValue('password')) {
      let msg = i18n.Text('myaccount.common.twoPasswordsInconsistent')
      callback(msg)
    } else {
      callback()
    }
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
                compareToFirstPassword(rule, value, callback),
              },
            ],
          })(<InputNumber />)}
        </FormItem>
      </FormItem>
    </Form>
  )
})

export default AntdForm
