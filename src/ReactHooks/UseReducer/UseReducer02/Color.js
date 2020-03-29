import React, { createContext } from 'react'

// 创建ColorContext
export const ColorContext = createContext()

/**
 * 创建Color组件
 * Color组件所包裹的所有子组件都可以通过调用ColorContext访问value
 */

export const Color = props => {
  return (
    <ColorContext.Provider value={{ color: 'blue' }}>
      {props.children}
    </ColorContext.Provider>
  )
}
