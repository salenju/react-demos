import React from 'react'
import { storiesOf } from '@storybook/react'

import Example from '../src'
import SKU from './Mock/SKU/SKU'
import {
  getSpecList,
  getSpecCombinationList,
} from './Mock/SKU/exchange-sku-list'

const {
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
  Computed,
  Cascader,
  AntdForm,
  ClassComponent,
  LocalClock,
  LifeCycle,
  ProductManagement01,
  ProductManagement02,
  SkuList,
  SKUList03,
  SKUList04,
  SKUList03Orign,
  ImgLazyload,
  AddToCartBtn,
  SideMenu,
} = Example

storiesOf('RowCroll', module)
  .add('-RowCroll-Hook', () => <RowCrollDemo height={200} speed={25} />)
  .add('-RowCroll-Hook操作DOM', () => (
    <RowCrollDemo01 height={200} speed={25} />
  ))
  .add('-RowCroll-class', () => <RowCrollDemo02 height={200} speed={25} />)
  .add('-RowCroll-间歇滚动', () => <RowCrollDemo03 />)

storiesOf('CheckBox', module).add('CheckBox', () => <CheckBoxDemo01 />)

storiesOf('Refs', module)
  .add('CallbackRef01', () => <CallbackRef01 />)
  .add('CallbackRef02', () => <CallbackRef02 />)
  .add('CustomTextInput', () => <CustomTextInput />)
  .add('AutoFocusTextInput', () => <AutoFocusTextInput />)

storiesOf('Context', module).add('Context01', () => <Context01 />)

storiesOf('ReactRouter', module).add('Link01', () => <Link01 />)

storiesOf('Mobx Demo', module).add('Computed', () => <Computed />)

storiesOf('Cascader', module).add('Cascader', () => <Cascader />)
storiesOf('AntdForm', module).add('AntdForm', () => <AntdForm />)

storiesOf('React原理', module)
  .add('ClassComponent', () => <ClassComponent />)
  .add('LocalClock', () => <LocalClock />)
  .add('生命周期', () => <LifeCycle />)

storiesOf('图片懒加载', module).add('ImgLazyload', () => <ImgLazyload />)

storiesOf('商品管理界面', module)
  .add('方案-1', () => <ProductManagement01 />)
  .add('方案-2', () => <ProductManagement02 />)

storiesOf('SKU管理', module)
  .add('方案-1', () => <SkuList />)
  .add('方案-3 orign', () => (
    <SKUList03Orign
      specList={getSpecList(SKU.SKU_LIST)}
      specCombinationList={getSpecCombinationList(SKU.SKU_LIST)}
      // defaultSelect={SKU.defaultSelect}
      callback={(value) =>
        console.log('----------->SkuList03-callback:', value)
      }
      // defaultSpecs={SKU.defaultSelect.specs}
    />
  ))
  .add('方案-3-淘宝 ', () => (
    <SKUList03
      specList={SKU.specList3}
      specCombinationList={SKU.specCombinationList3}
    />
  ))
  .add('方案-4-京东', () => (
    <SKUList04
      specList={SKU.specList2}
      specCombinationList={SKU.specCombinationList2}
    />
  ))
