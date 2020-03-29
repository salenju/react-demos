import React, { createContext, useReducer } from 'react'

// 创建ColorContext
export const ColorContext = createContext({})

export const UPDATE_COLOR = 'UPDATE_COLOR'

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.color
    default:
      return state
  }
}

/**
 * 创建Color组件
 * Color组件所包裹的所有子组件都可以通过调用ColorContext访问value
 */

export const Color = props => {
  const [color, dispatch] = useReducer(reducer, 'blue')
  return (
    <ColorContext.Provider value={{ color, dispatch }}>
      {props.children}
    </ColorContext.Provider>
  )
}
