import React, { useEffect, useState, useMemo, useCallback } from 'react'
import './spec.css'

// 模拟接口
function fetchData() {
  return [
    {
      id: '319100479428696552',
      price: 44,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China1', 'Pair', '黑色橘线', '44码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100479529359848',
      price: 37,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '37码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100479613245928',
      price: 41,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '41码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100479713909224',
      price: 38,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '38码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100479814572520',
      price: 35,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '35码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100479915235816',
      price: 43,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '43码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100478824716776',
      price: 39,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '39码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100478925380072',
      price: 42,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '42码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100479026043368',
      price: 36,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '36码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100479126706664',
      price: 46,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '46码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100479227369960',
      price: 40,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '40码', '超纤革鞋面、普通橡胶底'],
    },
    {
      id: '319100479328033256',
      price: 45,
      msrp: 5.7,
      priceType: 'Fixed',
      maxPrice: null,
      specs: ['China', 'Pair', '黑色橘线', '45码', '超纤革鞋面、普通橡胶底'],
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

  // 所有在售商品的 skuMap
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
          console.log('----->>onSkuClick-list:',list)
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
      {skuMap.map((arr, index) => {
        return (
          <div key={`arr${index}`}>
            {arr.map((sku) => {
              return (
                <span
                  key={`sku${sku}`}
                  className={`sku-item ${
                    selectedSkuArr.includes(sku) ? 'sku-item-active' : ''
                  }`}
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
