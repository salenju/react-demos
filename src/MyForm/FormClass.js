import React from 'react'
import AsyncValidator from 'async-validator'

class InputComponent extends React.Component {
  render() {
    const { form } = this.props
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
        <div {...form.getFieldError('inputKey')}/>
      </div>
    )
  }
}

// 高阶组件
const FormCreate = (options) => {
  const store = {} // 存储变量和错误信息

  return (WrapperComponent) => {
    return class HOCWrapperComponent extends React.Component {
      constructor(props) {
        super(props)
        this.getFieldProps = this.getFieldProps.bind(this)
      }

      getFieldProps(fieldKey, options) {
        const self = this
        const validator = new AsyncValidator({ [fieldKey]: options.validator })
        return {
          onInput(e) {
            const value = e.target.value
            store[fieldKey] = { ...store[fieldKey], value }  
            // store[fieldKey] = value
            console.log('=====>store:', store)

            validator
              .validate({ [fieldKey]: value })
              .then(() => {
                store[fieldKey].error = null
                self.forceUpdate()
              })
              .catch(({ errors }) => {
                store[fieldKey].error =
                  errors && errors.map((error) => error.message)
                self.forceUpdate() // 强制从重新渲染
              })
          },
        }
      }

      getFieldError = (fieldKey) => {
        return {
          children: store[fieldKey] && store[fieldKey].error,
        }
      }

      render() {
        const form = {
          getFieldProps: this.getFieldProps,
          getFieldError: this.getFieldError,
        }

        return <WrapperComponent form={form}></WrapperComponent>
      }
    }
  }
}

const FormCreateComponent = FormCreate({ data: 'Hello World' })(InputComponent)

export default class extends React.Component {
  render() {
    return (
      <div>
        <FormCreateComponent />
      </div>
    )
  }
}
