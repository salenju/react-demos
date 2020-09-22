import React, { useState, useMemo, useEffect } from 'react'
import SpecAdjoinMatrix from './utils/spec-adjoin-martix'
import './spec.css'
const classNames = require('classnames')

const Spec = (props) => {
  const { specList, specCombinationList } = props

  // 已选择的规格，长度为规格列表的长度
  const [specsS, setSpecsS] = useState(Array(specList.length).fill(''))
  const [matchSpec, setMatchSpec] = useState()

  // 创建一个规格矩阵
  const specAdjoinMatrix = useMemo(
    () => new SpecAdjoinMatrix(specList, specCombinationList),
    [specList, specCombinationList]
  )

  // 获得可选项表
  const optionSpecs = specAdjoinMatrix.getSpecscOptions(specsS)

  const handleClick = function (bool, text, index) {
    // 排除可选规格里面没有的规格
    if (specsS[index] !== text && !bool) return
    // 根据text判断是否已经被选中了
    specsS[index] = specsS[index] === text ? '' : text
    setSpecsS(specsS.slice())
  }

  useEffect(() => {
    const _matchSpec = specCombinationList.find(
      (item) => item.specs.join(',') === specsS.join(',')
    )
    console.log('-->>_matchSpec', _matchSpec)
    setMatchSpec(_matchSpec)
  }, [specsS, specCombinationList])

  console.log('-->>specList', specList)
  console.log('-->>optionSpecs', optionSpecs)
  console.log('-->>specsS', specsS)
  console.log('-->>specCombinationList', specCombinationList)
  console.log('-->>matchSpec', matchSpec)

  return (
    <div className="container">
      {specList.map(({ title, list }, index) => (
        <div key={index}>
          <p className="title">{title}</p>
          <div className="specBox">
            {list.map((value, i) => {
              const isOption = optionSpecs && optionSpecs.includes(value) // 当前规格是否可选
              const isActive = specsS.includes(value) // 当前规格是否被选
              return (
                <span
                  key={i}
                  className={classNames({
                    specOption: isOption,
                    specAction: isActive,
                    specDisabled: !isOption,
                  })}
                  onClick={() => handleClick(isOption, value, index)}
                >
                  {value}
                </span>
              )
            })}
          </div>
        </div>
      ))}
      {matchSpec && <div>价格：{matchSpec.price}</div>}
      {matchSpec && <div className="mrsp">{matchSpec.mrsp}</div>}
    </div>
  )
}

export default Spec
