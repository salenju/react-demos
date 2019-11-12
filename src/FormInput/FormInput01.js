import React from 'react'
import { Form, InputNumber, Input, DatePicker, Button, Select, Checkbox } from 'antd'
import { observer } from "mobx-react"

const FormItem = Form.Item;
const Option = Select.Option;

const FormInput01 = Form.create({
  onValuesChange(props, changed,allvalues){
    console.log('-------->changed:',changed)
    console.log('-------->allvalues:',allvalues)
    return false
  }
})(observer(props => {
  const { getFieldDecorator, validateFieldsAndScroll } = props.form
  console.log('=============>我被执行了！')
  const handleSubmit = (e) => {
    e.preventDefault()
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('===========>>>values:', values)
      }
    })
  }

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <div>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <FormItem label='E-mail'>
          {
            getFieldDecorator('email', {})(
              <Input />
            )
          }
        </FormItem>
        <FormItem label='Password'>
          {
            getFieldDecorator('password', {})(
              <Input />
            )
          }
        </FormItem>
        <FormItem label='Confirm Password'>
          {
            getFieldDecorator('confirm', {})(
              <Input />
            )
          }
        </FormItem>
        <FormItem label='Nickname'>
          {
            getFieldDecorator('nickname', {})(
              <Input />
            )
          }
        </FormItem>
        <FormItem label='Phone Numbe'>
          {
            getFieldDecorator('phone', {})(
              <InputNumber />
            )
          }
        </FormItem>
        <FormItem label='Website'>
          {
            getFieldDecorator('website', {})(
              <Input />
            )
          }
        </FormItem>
        <FormItem label='Love'>
          {
            getFieldDecorator('love', {})(
              <Checkbox.Group style={{ width: '100%' }}>
                <Checkbox value="A">A</Checkbox>
                <Checkbox value="B">B</Checkbox>
                <Checkbox value="C">C</Checkbox>
                <Checkbox value="D">D</Checkbox>
                <Checkbox value="E">E</Checkbox>
              </Checkbox.Group>,
            )
          }
        </FormItem>
        <FormItem label='Borth'>
          {
            getFieldDecorator('borth', {})(
              <DatePicker />
            )
          }
        </FormItem>
        <FormItem label='Title'>
          {
            getFieldDecorator('title', {})(
              <Select>
                <Option value="11">11</Option>
                <Option value="12342">12342</Option>
                <Option value="123543">123543</Option>
                <Option value="1DHGH">1DHGH</Option>
                <Option value="1DSFGDF">1DSFGDF</Option>
                <Option value="1SG">1SG</Option>
                <Option value="1SDGG">1SDGG</Option>
                <Option value="1AFSGAD">1AFSGAD</Option>
                <Option value="1ASDGSDG">1ASDGSDG</Option>
                <Option value="2SDGJL">2SDGJL</Option>
                <Option value="2SFGDSG">2SFGDSG</Option>
                <Option value="2SDGDSG">2SDGDSG</Option>
                <Option value="2SDD">2SDD</Option>
                <Option value="2GFSDG">2GFSDG</Option>
                <Option value="2SDGD">2SDGD</Option>
                <Option value="2RTTR">2RTTR</Option>
                <Option value="2SDFGDS">2SDFGDS</Option>
                <Option value="232534">232534</Option>
                <Option value="2VDXC">2VDXC</Option>
              </Select>
            )
          }
        </FormItem>
        <FormItem >
          <Button htmlType='submit'>Submit</Button>
        </FormItem>
      </Form>
    </div>
  )
})
)

export default FormInput01