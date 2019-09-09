import React, { Component } from 'react'
import { Checkbox, Empty, Select } from 'antd'

const CheckboxGroup = Checkbox.Group
const {Option} = Select

const Data = [{'value':'Salen'}]

class CheckboxDemo01 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkAll: false,
      checkedCompanyList: [],  // 已选择的公司
      checkedProductList: [],  // 已选择的商品
    }
  }

  // 全选
  checkAll = (e) => {
    this.setState({
      checkAll: e.target.checked,
      checkedCompanyList: e.target.checked ? ['c1', 'c2'] : [],
      checkedProductList: e.target.checked ? ['p1', 'p2', 'p3', 'p4'] : [],
    })
  }

  // 选择公司
  checkCompany = (e) => {
    let _checkedCompanyList = this.state.checkedCompanyList
    let inCheckedCompanyList = _checkedCompanyList.includes(e.target.value)
    // 选择公司已在checkedCompanyList中，去除该公司及其旗下的选中的商品
    if (inCheckedCompanyList) {
      _checkedCompanyList = _checkedCompanyList.filter(item => item !== e.target.value)

      // 去除该公司及其旗下的选中的商品

    } else { // 选择公司不在checkedCompanyList中，添加该公司及其旗下的所有商品
      _checkedCompanyList = [..._checkedCompanyList, e.target.value]

      // 添加该公司及其旗下的所有商品
    }

    console.log('=======>>checkCompany:', _checkedCompanyList)
    this.setState({
      checkAll: _checkedCompanyList.length === 2 ? true : false,
      checkedCompanyList: _checkedCompanyList,
      checkedProductList: _checkedCompanyList.length === 2 ? ['p1', 'p2', 'p3', 'p4'] : [],
    })
  }

  // 选择产品
  checkProduct = (checkedList, type) => {
    console.log('=======>>checkedList:', checkedList)
    console.log('=======>>type:', type)

    // let _checkedProductList = this.state.checkedProductList
    // let inCheckedProductList = _checkedProductList.includes(value)
    // // 选择公司已在checkedCompanyList中，去除该公司及其旗下的选中的商品
    // if (inCheckedProductList) {
    //   _checkedProductList = _checkedProductList.filter(item => item !== value)

    //   // 去除该公司及其旗下的选中的商品

    // } else { // 选择公司不在checkedCompanyList中，添加该公司及其旗下的所有商品
    //   _checkedProductList = [..._checkedProductList, value]

    //   // 添加该公司及其旗下的所有商品
    // }

    this.setState({
      checkAll: checkedList.length === 5 ? true : false,
      checkedProductList: checkedList
    })
  }



  render() {
    return (
      <div>
        <Checkbox checked={this.state.checkAll} onChange={this.checkAll}>
          Check all
        </Checkbox>
        <CheckboxGroup value={this.state.checkedCompanyList} >
          <div>
            <Checkbox value='c1' onChange={this.checkCompany}>
              company1
            </Checkbox>
            <CheckboxGroup
              value={this.state.checkedProductList}
              onChange={(checkedList) => this.checkProduct(checkedList, 'c1111')}
            >
              <Checkbox value='p1'>p1</Checkbox>
              <Checkbox value='p2'>p2</Checkbox>
            </CheckboxGroup>
          </div>
          <div>
            <Checkbox value='c2' onChange={this.checkCompany}>
              company2
            </Checkbox>
            <CheckboxGroup
              value={this.state.checkedProductList}
              onChange={this.checkProduct}
            >
              <Checkbox value='p3'>p3</Checkbox>
              <Checkbox value='p4'>p4</Checkbox>
            </CheckboxGroup>
          </div>
        </CheckboxGroup>
        <Empty description='暂无数据' />
        <Select notFoundContent='暂无数据'>
          {/* {
            Data.length !== 0
              ? Data.map(item => <Option value={item.value}>{item.value}</Option>)
              : <div></div>
          } */}

        </Select>
      </div>
    )
  }
}

export default CheckboxDemo01