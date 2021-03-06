import React from 'react'
import ReactDOM from 'react-dom'

import RowCrollDemo from './RowCroll/RowCrollDemo'
import RowCrollDemo01 from './RowCroll/RowCrollDemo01'
import RowCrollDemo02 from './RowCroll/RowCrollDemo02'
import RowCrollDemo03 from './RowCroll/RowCrollDemo03'

import CheckBoxDemo01 from './CheckBox/CheckBoxDemo01'

import CallbackRef01 from './Refs/CallbackRef01'
import CallbackRef02 from './Refs/CallbackRef02'
import CustomTextInput from './Refs/CustomTextInput'
import AutoFocusTextInput from './Refs/AutoFocusTextInput'

import Context01 from './Context'

// React Router
import App from './router'
import Link01 from './ReactRouter/Link01'
import Router01 from './ReactRouter/Router01'
import Router02 from './ReactRouter/Router02'

import Computed from './Mobx/Computed'

import Cascader from './Cascader'

import AntdInput from './AntdInput'

import ReactHooks from './ReactHooks'

// Redux Demo
import ReduxDemo01 from './ReduxDemo/ReduxDemo01'
import ReduxDemo02 from './ReduxDemo/ReduxDemo02'
import ReduxDemo03 from './ReduxDemo/ReduxDemo03'
import ReduxDemo04 from './ReduxDemo/ReduxDemo04'
import ReduxToDoList from './ReduxDemo/ReduxToDoList'

import AntdForm from './AntdForm'

// React 原理
import ClassComponent from './React原理/ClassComponent'
import LocalClock from './React原理/02_LocalClock'
import LifeCycle from './React原理/LifeCycle'

//ProductManagement
import ProductManagement01 from './ProductManagement/Demo01'
import ProductManagement02 from './ProductManagement/Demo02'

// SKUList
import SkuList from './SKUList'
import SKUList03Orign from './SKUList03Orign'
import SKUList03 from './SKUList03'
import SKUList04 from './SKUList04'

// Antd Tree demo
import TreeDemo from './AntdTree'

// ImgLazyload
import ImgLazyload from './ImgLazyload'

// Animation
import AddToCartBtn from './Animation/AddToCartBtn'
import FixedSideMenu from './Animation/FixedSideMenu'

// UploadAndDrag
import UploadAndDrag01 from './UploadAndDrag/UploadAndDrag01'
import UploadAndDrag02 from './UploadAndDrag/UploadAndDrag02'
import UploadAndDrag03 from './UploadAndDrag/UploadAndDrag03'

import SideMenu from './SideMenu'

// react-chrono
import HorizontalBasic from './ReactChrono/HorizontalBasic'
import VerticalAlternating from './ReactChrono/VerticalAlternating'
import VerticalAlternatingImg from './ReactChrono/VerticalAlternatingImg'
import VerticalBasic from './ReactChrono/VerticalBasic'
import VerticalWithMixedContent from './ReactChrono/VerticalWithMixedContent'

const ReactChrono = {
  HorizontalBasic,
  VerticalAlternating,
  VerticalAlternatingImg,
  VerticalBasic,
  VerticalWithMixedContent,
}

const Example = {
  RowCrollDemo,
  RowCrollDemo01,
  RowCrollDemo02,
  RowCrollDemo03,
  CheckBoxDemo01,
  CallbackRef01,
  CallbackRef02,
  CustomTextInput,
  AutoFocusTextInput,
  Context01,
  Link01,
  Router01,
  Router02,
  Computed,
  Cascader,
  AntdInput,
  AntdForm,
  ReactHooks,
  ClassComponent,
  LocalClock,
  ReduxDemo01,
  ReduxDemo02,
  ReduxDemo03,
  ReduxDemo04,
  ReduxToDoList,
  LifeCycle,
  ProductManagement01,
  ProductManagement02,
  SkuList,
  SKUList03,
  SKUList03Orign,
  SKUList04,
  TreeDemo,
  ImgLazyload,
  AddToCartBtn,
  SideMenu,
  FixedSideMenu,
  UploadAndDrag01,
  UploadAndDrag02,
  UploadAndDrag03,
  ReactChrono,
}

ReactDOM.render(<App />, document.getElementById('root'))

export default Example
