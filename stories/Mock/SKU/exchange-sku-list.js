// specs矩阵转置
const transMatrix = (currentSkuList) => {
  let transResult = {}

  currentSkuList.forEach((specs) => {
    specs.forEach((item) => {
      if (!transResult[item['specId']]) {
        transResult[item['specId']] = {
          specId: item['specId'],
          specName: item['specName'],
          value_list: {
            [item['specItemId']]: {
              specItemId: item['specItemId'],
              itemName: item['itemName'],
            },
          },
        }
      } else if (!transResult[item['specId']].value_list[item['specItemId']]) {
        transResult[item['specId']].value_list[item['specItemId']] = {
          specItemId: item['specItemId'],
          itemName: item['itemName'],
        }
      }
    })
  })
  console.log('------------->>>transResult:', transResult)
  return transResult
}

// 转换specs数据成组件所需格式
// [
//   { title: '颜色', list: ['红色', '紫色', '白色', '黑色'] }
// ]
export const getSpecList = (SKU_LIST) => {
  const _currentSkuList = SKU_LIST.map((item) => item.specs)

  let specList = []
  let transResult = transMatrix(_currentSkuList)
  let _keys = Object.keys(transResult).sort()

  _keys.map((key) => {
    let specObj = JSON.parse(JSON.stringify(transResult[key]))
    let obj = {}
    let list = []
    Object.keys(specObj.value_list).forEach((item) =>
      list.push(specObj.value_list[item].itemName)
    )

    obj.title = specObj.specName
    obj.list = list
    // console.log('------------->>>getSpecList-specList:', obj)

    specList.push(obj)
  })
  // console.log('------------->>>getSpecList-specList:', specList)
  return specList
}

// 转换specs数据成组件所需格式
export const getSpecCombinationList = (SKU_LIST) => {
  let specCombinationList = []
  SKU_LIST.map((sku) => {
    let item = {}
    item.id = sku.id
    item.price = sku.price
    item.mrsp = sku.mrsp
    item.specs = getCombinationSpecs(sku.specs, SKU_LIST)
    specCombinationList.push(item)
  })
  console.log('------------->>>getSpecCombinationList:', specCombinationList)

  return specCombinationList
}

// 获取排列组合形成的spec数组
const getCombinationSpecs = (specs, SKU_LIST) => {
  let specArr = []
  let specList = getSpecList(SKU_LIST)
  specs.forEach((spec) => {
    let index = specList.findIndex((item) => item.title === spec.specName)
    index !== -1 ? (specArr[index] = spec.itemName) : null
  })

  return specArr
}
