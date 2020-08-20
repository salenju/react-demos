import React from 'react'

const SKU_LIST = [
  {
    id: 2,
    price: 46.76,
    discount_price: null,
    online: true,
    img: '',
    title: '金属灰·七龙珠',
    spu_id: 2,
    category_id: 17,
    root_category_id: 3,
    specs: [
      {
        key_id: 1,
        key: '颜色',
        value_id: 45,
        value: '金属灰',
      },
      {
        key_id: 3,
        key: '图案',
        value_id: 9,
        value: '七龙珠',
      },
      {
        key_id: 4,
        key: '尺码',
        value_id: 14,
        value: '小号 S',
      },
    ],
    code: '2$1-45#3-9#4-14',
    price: 5,
  },
  {
    id: 2,
    price: 56.76,
    discount_price: null,
    online: true,
    img: '',
    title: '金属灰·七龙珠',
    spu_id: 2,
    category_id: 17,
    root_category_id: 3,
    specs: [
      {
        key_id: 1,
        key: '颜色',
        value_id: 46,
        value: '青芒色',
      },
      {
        key_id: 3,
        key: '图案',
        value_id: 10,
        value: '灌篮高手',
      },
      {
        key_id: 4,
        key: '尺码',
        value_id: 15,
        value: '中号 M',
      },
    ],
    code: '2$1-45#3-9#4-14',
  },
  {
    id: 2,
    price: 66.76,
    discount_price: null,
    online: true,
    img: '',
    title: '金属灰·七龙珠',
    spu_id: 2,
    category_id: 17,
    root_category_id: 3,
    specs: [
      {
        key_id: 1,
        key: '颜色',
        value_id: 46,
        value: '青芒色',
      },
      {
        key_id: 3,
        key: '图案',
        value_id: 9,
        value: '圣斗士',
      },
      {
        key_id: 4,
        key: '尺码',
        value_id: 14,
        value: '大号 L',
      },
    ],
    code: '2$1-45#3-9#4-14',
    price: 23.45,
  },
  {
    id: 2,
    price: 66.76,
    discount_price: null,
    online: true,
    img: '',
    title: '金属灰·七龙珠',
    spu_id: 2,
    category_id: 17,
    root_category_id: 3,
    specs: [
      {
        key_id: 1,
        key: '颜色',
        value_id: 45,
        value: '橘黄色',
      },
      {
        key_id: 3,
        key: '图案',
        value_id: 9,
        value: '七龙珠',
      },
      {
        key_id: 4,
        key: '尺码',
        value_id: 14,
        value: '小号 S',
      },
    ],
    code: '2$1-45#3-9#4-14',
    price: 23.45,
  },
]

const SKUList = () => {
  let allSpecsList = []
  let currentSkuList = SKU_LIST.map((item) => item.specs)

  const _transMatrix = () => {
    let transResult = {}

    currentSkuList.forEach((specs) => {
      specs.forEach((item) => {
        if (!transResult[item['key_id']]) {
          transResult[item['key_id']] = {
            key_id: item['key_id'],
            key: item['key'],
            value_list: {
              [item['value_id']]: {
                value_id: item['value_id'],
                value: item['value'],
                selected: false,
                disabled: false,
              },
            },
          }
        } else if (!transResult[item['key_id']].value_list[item['value_id']]) {
          transResult[item['key_id']].value_list[item['value_id']] = {
            value_id: item['value_id'],
            value: item['value'],
            selected: false,
            disabled: false,
          }
        }
      })
    })
    return transResult
  }

  const getAllSpecsList = () => {
    const transResult = _transMatrix()
    allSpecsList = Object.keys(transResult).map((key) => {
      let obj = JSON.parse(JSON.stringify(transResult[key]))
      obj.value_list = Object.keys(obj.value_list).map(
        (vk) => obj.value_list[vk]
      )
      return obj
    })
    return allSpecsList
  }

  const getSelectable = () => {
    let selectable = {}
    if (allSpecsList.length === 0) {
      getAllSpecsList()
    }

    if (currentSkuList.length === 0) {
      currentSkuList = SKU_LIST.map((item) => item.specs)
    }

    const rowLength = allSpecsList.length

    for (let row = 0; row < rowLength; row++) {
      let { key_id, key } = allSpecsList[row]
      let columnList = allSpecsList[row].value_list
      selectable[key_id] = {
        key_id,
        key,
        selectableList: {},
      }
      for (let column = 0; column < columnList.length; column++) {
        let { value_id, value } = columnList[column]
        selectable[key_id].selectableList[value_id] = {
          value_id,
          value,
          matchItems: null,
        }
      }

      currentSkuList.forEach((specificSpecs) => {
        let matchItems = {}
        let currentVlaueId = ''
        specificSpecs.forEach((specsItem) => {
          if (specsItem.key_id !== key_id) {
            matchItems[specsItem.key_id] = [specsItem]
          } else {
            currentVlaueId = specsItem.value_id
          }
        })

        if (!selectable[key_id].selectableList[currentVlaueId].matchItems) {
          selectable[key_id].selectableList[
            currentVlaueId
          ].matchItems = matchItems
        } else {
          Object.keys(
            selectable[key_id].selectableList[currentVlaueId].matchItems
          ).forEach((k) => {
            selectable[key_id].selectableList[currentVlaueId].matchItems[
              k
            ].push(...matchItems[k])
          })
        }
      })
    }

    return selectable
  }

  let selectable = getSelectable()
  console.log('-------->allSpecsList:', allSpecsList)
  console.log('-------->selectable:', selectable)

  // 点击某中规格时候的处理
  const handleClickSpecs = (event) => {
    const { key_id, value_id, select, x, y } = event.currentTarget.dataset
    if (select === 'disabled') {
      return
    }

    if (select === 'selectable') {
      this.data.selected.forEach((item, index) => {
        if (item.x === x) {
          this.data.selected.splice(index, 1)
        }
      })
      this.data.selected.push({ x, y, key_id, value_id })
      handleSelectOneOption(x, y, key_id, value_id)
    }

    if (select === 'active') {
      clearAllSelectedAndDisabled()
      this.data.selected.forEach((item, index) => {
        if (item.x === x && item.y === y) {
          this.data.selected.splice(index, 1)
        }
      })

      this.data.selected.forEach((item) => {
        handleSelectOneOption(item.x, item.y, item.key_id, item.value_id)
      })
    }

    this.setData({
      allSpecsList: allSpecsList,
      selected: this.data.selected,
    })
  }

  const clearAllSelectedAndDisabled = () => {
    allSpecsList.forEach((row) => {
      row.value_list.forEach((specs) => {
        specs.selected = false
        specs.disabled = false
      })
    })
  }

  const handleSelectOneOption = (x, y, key_id, value_id) => {
    allSpecsList[x].value_list[y].selected = true
    allSpecsList[x].value_list.forEach((specs, index) => {
      if (index === y) {
        specs.selected = true
      } else {
        specs.selected = false
      }
    })
    const selectableMatchItems = this.data.selectable[key_id].selectableList[
      value_id
    ].matchItems
    allSpecsList.forEach((specsRow, index) => {
      if (index === x) {
        return
      }
      specsRow.value_list.forEach((specs) => {
        specs.disabled = false
        if (specs.selected) {
          return
        }
        const result = selectableMatchItems[specsRow.key_id].find(
          (item) => item.value_id === specs.value_id
        )
        if (!result) {
          specs.disabled = true
        }
      })
    })
  }

  return <div>SKUList</div>
}

export default SKUList
