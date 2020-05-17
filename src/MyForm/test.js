const { default: AsyncValidator } = require('async-validator')

const descriptor = {
  username: [
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
}

const asyncValidator = new AsyncValidator(descriptor)

const data = {
  username: '315124',
}

asyncValidator
  .validate(data)
  .then((res) => {
    console.log('校验成功')
  })
  .catch(({ errors, fields }) => {
    console.log(errors, fields)
  })
