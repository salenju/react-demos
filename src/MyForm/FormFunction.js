import React from 'react'
import AsyncValidator from 'async-validator'

const InputComponent = (props) => {
  const { form } = props
  return (
    <div>
      <input
        {...form.getFieldProps('inputKey', {
          validator: [
            {
              required: true,
              message: '请输入用户名',
            },
            {
              min: 2,
              max: 20,
              message: '用户名长度为2~20',
            },
          ],
        })}
      />
      <div {...form.getFieldError('inputKey')} />
    </div>
  )
}

// 高阶组件
const FormCreate = (options) => {
  const store = {}
  return (WrapperComponent) => {
    let HOCWrapperComponent
    return (HOCWrapperComponent = () => {
      const form = {
        getFieldProps: (fieldKey, options) => {
          const validator = new AsyncValidator({
            [fieldKey]: options.validator,
          })
          return {
            onInput: (e) => {
              const value = e.target.value
              store[fieldKey] = { ...store[fieldKey], value }
              console.log('====>', store[fieldKey])

              validator
                .validate({ [fieldKey]: value })
                .then(() => {
                  store[fieldKey].error = null
                })
                .catch(({ errors }) => {
                  store[fieldKey].error = errors.map((error) => error.message)
                })
            },
          }
        },
        getFieldError: (fieldKey) => {
          return {
            children: store[fieldKey] && store[fieldKey].error,
          }
        },
      }
      return <WrapperComponent form={form} />
    })
  }
}

const FormCreateComponent = FormCreate()(InputComponent)

const FormFunction = () => {
  return <FormCreateComponent />
}

export default FormFunction
