import React, { useEffect, useState, useMemo, useCallback } from 'react'
import './spec.css'

// 模拟接口
function fetchData() {
  return [
    {
      id: '319664716748298728',
      priceType: 'QUOTE',
      maxPrice: null,
      specs: ['Dalian', 'Case', '泰国芒果', 'Red'],
    },
    {
      id: '319664716748167656',
      price: 2.27,
      msrp: 6,
      priceType: 'FIXED',
      maxPrice: null,
      specs: ['Shenzhen', 'Kilogram', '泰国芒果', 'Red'],
    },
    {
      id: '319664716748167646',
      price: 2.27,
      msrp: 6,
      priceType: 'FIXED',
      maxPrice: null,
      specs: ['Shenzhen', 'Kilogram', '泰国芒果', 'Blue'],
    },
    {
      id: '319643639783627240',
      price: 20.45,
      msrp: 30,
      priceType: 'RANGE',
      maxPrice: 25,
      specs: ['Shenzhen', 'Bag', '澳芒', 'Blue'],
    },
    {
      id: '319664716748233192',
      price: 22.73,
      priceType: 'RANGE',
      maxPrice: 28.41,
      specs: ['Singapore', 'Bag', '泰国芒果', 'Blue'],
    },
    {
      id: '319643639783496168',
      price: 22.73,
      msrp: 30,
      priceType: 'FIXED',
      maxPrice: null,
      specs: ['Dalian', 'Box', '澳芒', 'Blue'],
    },
    {
      id: '319643639783365096',
      price: 25,
      msrp: 30,
      priceType: 'FIXED',
      maxPrice: null,
      specs: ['Singapore', 'Box', '澳芒', 'Blue'],
    },
  ]
}

export default function App() {
  const [goods, setGoods] = useState([])
  const [selectedSkuArr, setSelectedSkuArr] = useState([])
  const [matchGoods, setMatchGoods] = useState([])
  const [unite, setUnite] = useState([])

  // 模拟接口，获取在售商品
  useEffect(() => {
    setGoods(fetchData())
  }, [])

  // 根据传入的商品，计算出sku二维数组
  const goods2skuMap = useCallback((_goods) => {
    if (_goods.length) {
      const skuMap = []
      _goods.forEach((item) => {
        item.specs.forEach((sku, index) => {
          const target = skuMap[index]
          if (target) {
            if (!target.includes(sku)) target.push(sku)
          } else {
            skuMap[index] = [sku]
          }
        })
      })
      return skuMap
    }
    return []
  }, [])

  // 所有在售商品的 skuMap-----可动态传入
  const skuMap = useMemo(() => {
    if (goods.length) {
      const t = goods2skuMap(goods)
      setSelectedSkuArr(new Array(t.length).fill(''))
      return t
    }
    return []
  }, [goods, goods2skuMap])

  // 根据已选sku列表，匹配在售商品
  const matchGoodsFnc = useCallback(
    (selectedSkuArr) => {
      const notEmptyList = selectedSkuArr.filter((item) => !!item)
      return goods.filter((good) =>
        notEmptyList.every((sku) => good.specs.includes(sku))
      )
    },
    [goods]
  )

  const onSkuClick = useCallback(
    (sku, group, index, skuMap) => {
      setSelectedSkuArr((arr) => {
        if (arr.includes(sku)) return arr
        arr[index] = sku

        if (arr.filter((item) => !!item).length > 1) {
          // 单sku
          const singleArr = [sku]
          const list1 = matchGoodsFnc(singleArr)
          // setMatchGoods(list1);
          const arr2d_1 = goods2skuMap(list1)
          arr2d_1[index] = group
          console.log(singleArr, JSON.stringify(arr2d_1))

          setUnite((unite) => {
            const _unite = unite.map((skus, index) => {
              return skus.filter((item) => arr2d_1[index].includes(item))
            })
            console.log('unite', sku, JSON.stringify(_unite))
            return _unite
          })
        } else {
          // 多sku
          const list = matchGoodsFnc(arr)
          setMatchGoods(list)
          const arr2d = goods2skuMap(list)
          arr.forEach((item, j) => {
            if (item) arr2d[j] = skuMap[j]
          })
          console.log(arr, JSON.stringify(arr2d))
          setUnite(arr2d)
        }

        return [...arr]
      })
      // skuMap.map(g => {

      // })
    },
    [matchGoodsFnc, goods2skuMap]
  )

  // 匹配商品 skuMap 可能不需要了
  const matchSkuMap = useMemo(() => {
    if (matchGoods.length) {
      return goods2skuMap(matchGoods)
    }
    return []
  }, [matchGoods, goods2skuMap])

  return (
    <div>
      <div>{goods.length}</div>
      <div>已选sku：{JSON.stringify(selectedSkuArr)}</div>
      <div>匹配商品sku: {JSON.stringify(matchSkuMap)}</div>
      <div>可选的sku: {JSON.stringify(unite.flat(2))}</div>
      <div>skuMap: {JSON.stringify(skuMap)}</div>
      {skuMap.map((arr, index) => {
        return (
          <div key={`arr${index}`}>
            {arr.map((sku) => {
              const isOption = unite.flat(2).includes(sku) // 当前规格是否可选
              return (
                <span
                  key={`sku${sku}`}
                  className={`sku-item ${
                    selectedSkuArr.includes(sku) ? 'sku-item-active' : ''
                  } ${!isOption ? 'sku-item-disable' : ''}`}
                  onClick={() => onSkuClick(sku, arr, index, skuMap)}
                >
                  {sku}
                </span>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
