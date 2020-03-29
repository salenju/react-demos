import React, { useContext } from 'react'
import { ColorContext } from './Color'

const ShowArea = props => {
  const { color } = useContext(ColorContext)
  return <div style={{ color: color }}>字体展示为{color}</div>
}

export default ShowArea
