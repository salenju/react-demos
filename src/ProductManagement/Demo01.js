import React, { useCallback, useMemo, useState, useEffect } from 'react'

const ProductManagement = () => {
  const [tableList, setTableList] = useState([])
  const [mapData, setMapData] = useState({
    port: ['SG', 'ZH'],
    color: ['red', 'blue'],
    size: ['41', '42'],
    currency: ['SGD', 'USD'],
  })

  useEffect(() => {
    setTableList(tranformObj2Arr(mapData))
  }, [mapData])

  const handleSetMapData = ({ action = 'ADD', type, value }) => {
    if (action === 'ADD') {
      mapData[type].push(value)
    } else if (action === 'DEL') {
      mapData[type] = mapData[type].filter((item) => item !== value)
    } else if (action === 'ALL') {
      mapData[type] = [value]
    }
    setMapData(mapData)
    setTableList(tranformObj2Arr(mapData))
  }

  // 格式化数据
  const tranformObj2Arr = (obj) => {
    let results = []
    let result = []

    if(!obj){
        return results
    }

    let keysArr = Object.keys(obj)
    let _arr = []
    keysArr.map((key) => {
      let itemArr = []
      obj[key].map((item) => {
        let _obj = {}
        _obj[key] = item
        itemArr.push(_obj)
      })
      obj[key].length !== 0 && _arr.push(itemArr)
    })

    console.log('---------->>>>>>keysArr_arr', _arr)

    doPermutation(_arr, 0)
    // 排列组合函数
    function doPermutation(arr, index) {
      for (let i = 0; i < arr[index].length; i++) {
        result[index] = arr[index][i]
        console.log('======>>>doPermutation:', result[index])
        console.log('======>>>doPermutation-result:', result)
        if (index !== arr.length - 1) {
          doPermutation(arr, index + 1)
        } else {
          results.push(Object.assign({}, ...result))
        }
      }
    }
    return results
  }

  console.log('------>>>tableList:', tableList)
  return (
    <div className="product-manage">
      {tableList &&
        tableList.map((item, index) => {
          let _itemKeys = Object.keys(item)
          return (
            <div key={index}>
              {_itemKeys.map((tableValue, index) => (
                <span key={index}>{item[tableValue]}</span>
              ))}
            </div>
          )
        })}
      <button
        onClick={() =>
          handleSetMapData({ action: 'ADD', type: 'port', value: 'JP' })
        }
      >
        添加Port-JP
      </button>
      <button
        onClick={() =>
          handleSetMapData({ action: 'DEL', type: 'port', value: 'JP' })
        }
      >
        删除Port-JP
      </button>
      <button
        onClick={() =>
          handleSetMapData({ action: 'ALL', type: 'currency', value: 'USD' })
        }
      >
        一键设置全为USD
      </button>
    </div>
  )
}

export default ProductManagement
