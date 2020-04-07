import React, { useState } from 'react'

// 生成随机色
const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }

  return color
}

// 填充Y轴偏移量
const translateY = (value) => {
  return `translateY(${value}px)`
}

export const DynamicCharts = (props) => {
  const [dataQueue, setdataQueue] = useState([]) // 当前操作的原始数据数组
  const [activeItemIdx, setActiveItemIdx] = useState(0) // 当前是第几帧
  const [highestValue, setHighestValue] = useState(0) // 榜首数据值
  const [currentValues, setCurrentValues] = useState({}) // 处理后用于渲染的数据
  const [firstRun, setFirstRun] = useState(false) // 第一次动态渲染的时间

  const start = () => {
    if (activeItemIdx > 1) {
      return
    }
    nextStep(true)
  }

  // 对下一帧进行处理
  const setNextValues = () => {
    

  }

  // 触发下一步循环
  const nextStep = (firstRun = false) => {
    setFirstRun(firstRun)
    setNextValues()
  }
}
