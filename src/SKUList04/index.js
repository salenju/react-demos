import React, { useState, useEffect, useDebugValue } from 'react'
import './spec.css'
const classNames = require('classnames')

const Spec = (props) => {
  const { specList, specCombinationList } = props

  // 已选择的规格，长度为规格列表的长度
  const [specsS, setSpecsS] = useState(Array(specList.length).fill(''))
  const [matchSpec, setMatchSpec] = useState()
  const [optionSpecs, setOptionSpecs] = useState([])

  // 获得可选项表
  const getSpecscOptions = (specsS, index) => {
    setSpecsS([...specsS])
    let tarArr = []
    let _specsS = specsS.filter((item) => item)
    let _specsArr = Array(specList.length).fill('')
    if (specsS.some(Boolean)) {
      let tag = 0
      specCombinationList.forEach((item) => {
        let include = _specsS.every((selectedSpec) =>
          item.specs.includes(selectedSpec)
        )

        // 有匹配数据
        if (include) {
          tag += 1
          if (_specsS.length === 1) {
            specList.forEach((spec, index) => {
              spec.list.includes(_specsS[0])
                ? (tarArr = [...tarArr, ...item.specs, ...spec.list])
                : (tarArr = [...tarArr, ...item.specs])
            })
          } else {
            tarArr = [...tarArr, ...item.specs]
          }
        }
      })

      if (!tag) {
        _specsArr[index] = specsS[index]
        const RR = getSpecscOptions(_specsArr)
        return RR
        // debugger
      }
    } else {
      // 一个都未选中的时候，展示所有可选项
      specList.forEach((item) => (tarArr = [...tarArr, ...item.list]))
    }

    let _tarArr = new Set(tarArr)
    return [..._tarArr]
  }

  const handleClick = function (bool, text, index) {
    // 排除可选规格里面没有的规格
    if (specsS[index] !== text && !bool) return
    // 根据text判断是否已经被选中了
    specsS[index] = specsS[index] === text ? '' : text
    setOptionSpecs(getSpecscOptions(specsS.slice(), index))
    // setSpecsS(specsS.slice())
  }
  useEffect(() => {
    setOptionSpecs(getSpecscOptions(specsS))
  }, [])

  useEffect(() => {
    const _matchSpec = specCombinationList.find(
      (item) => item.specs.join(',') === specsS.join(',')
    )
    setMatchSpec(_matchSpec)
    // setOptionSpecs(getSpecscOptions(specsS))
  }, [specsS, specCombinationList])

  // console.log('-->>specList', specList)
  console.log('-->>optionSpecs', optionSpecs)
  // console.log('-->>specsS', specsS)
  // console.log('-->>specCombinationList', specCombinationList)
  // console.log('-->>matchSpec', matchSpec)

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
                  onClick={() => handleClick(true, value, index)}
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
