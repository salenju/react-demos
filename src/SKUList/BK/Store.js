import { observable, action, toJS } from 'mobx'
import { SKU_LIST } from './MockData'

const state = observable({
  _allSpecsList: [], // 转置后的矩阵数组
  _selectable: [],
  _selected: [], // 已选中的数据id信息
  _selectTips: '请选择',
  _selectedItem: null,
  currentSkuList: [],
})

const actions = {
  init: action(() => {
    state._selectable = actions.getSelectable()
    state.currentSkuList = SKU_LIST.map((item) => item.specs)
    // console.log('-------->_allSpecsList:', toJS(state._allSpecsList))
    // console.log('-------->_selectable:', state._selectable)
  }),

  // 矩阵转置
  transMatrix: action(() => {
    let transResult = {}
    const { currentSkuList } = state

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
  }),

  // 获取所有spec列表
  getAllSpecsList: action(() => {
    const transResult = actions.transMatrix()
    state._allSpecsList = Object.keys(transResult).map((key) => {
      let obj = JSON.parse(JSON.stringify(transResult[key]))
      obj.value_list = Object.keys(obj.value_list).map(
        (vk) => obj.value_list[vk]
      )
      return obj
    })
  }),

  //
  getSelectable: action((data) => {
    let selectable = {}
    const { currentSkuList } = state
    if (state._allSpecsList.length === 0) {
      actions.getAllSpecsList()
    }

    if (currentSkuList.length === 0) {
      state.currentSkuList = SKU_LIST.map((item) => item.specs)
    }

    if (data) {
      let selectedItem = SKU_LIST.find((item) => item.title === data) || null
      return selectedItem
    }

    const rowLength = state._allSpecsList.length

    for (let row = 0; row < rowLength; row++) {
      let { key_id, key } = state._allSpecsList[row]
      let columnList = state._allSpecsList[row].value_list
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
  }),

  // 点击某种规格时候的处理
  handleClickSpecs: action((params) => {
    const { key_id, value_id, select, x, y } = params
    const { _selected } = state
    console.log('-------->handleClickSpecs-params:', params)

    if (select === 'disabled') {
      return
    }

    if (select === 'selectable') {
      _selected.forEach((item, index) => {
        if (item.x === x) {
          state._selected.splice(index, 1)
        }
      })
      state._selected.push({ x, y, key_id, value_id })
      console.log('-------->handleClickSpecs-_selected:', toJS(state._selected))

      actions.handleSelectOneOption(x, y, key_id, value_id)
    }

    if (select === 'active') {
      actions.clearAllSelectedAndDisabled()
      _selected.forEach((item, index) => {
        if (item.x === x && item.y === y) {
          state._selected.splice(index, 1)
        }
      })

      state._selected.forEach((item) => {
        actions.handleSelectOneOption(
          item.x,
          item.y,
          item.key_id,
          item.value_id
        )
      })
    }
    actions.getSelectedInfo()
  }),

  // 清空所有置灰与选中的代码
  clearAllSelectedAndDisabled: action(() => {
    state._allSpecsList.forEach((row) => {
      row.value_list.forEach((specs) => {
        specs.selected = false
        specs.disabled = false
      })
    })
  }),

  //
  handleSelectOneOption: action((x, y, key_id, value_id) => {
    state._allSpecsList[x].value_list[y].selected = true
    state._allSpecsList[x].value_list.forEach((specs, index) => {
      if (index === y) {
        specs.selected = true
      } else {
        specs.selected = false
      }
    })
    const selectableMatchItems =
      state._selectable[key_id].selectableList[value_id].matchItems
    state._allSpecsList.forEach((specsRow, index) => {
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
        console.log('-------->handleSelectOneOption-result:', toJS(result))

        if (!result) {
          specs.disabled = true
        }
      })
    })
  }),

  getSelectedInfo: action(() => {
    const { _selected, _allSpecsList } = state
    if (_selected.length === _allSpecsList.length) {
      let selectedText = []
      _allSpecsList.forEach((rowSpecs) => {
        rowSpecs.value_list.forEach((specs) => {
          if (specs.selected) {
            selectedText.push(specs.value)
          }
        })
      })
      state._selectTips = '已选：' + selectedText.join(',')
      state._selectedItem = actions.getSelectable(selectedText.join('.'))
      return
    }
    const selectedRow = _selected.map((item) => item.x)
    const unSelected = []
    _allSpecsList.forEach((item, index) => {
      if (!selectedRow.includes(index)) {
        unSelected.push(item.key)
      }
    })
    state._selectTips = '请选择：' + unSelected.join(',')
  }),

  getButtonStatus: action((selected, disabled) => {
    let tarValue = 'disabled'
    if (selected) {
      tarValue = 'active'
    } else if (!selected && !disabled) {
      tarValue = 'selectable'
    }
    return tarValue
  }),

  // get selected price
  getSlectedPrice: action(() => {}),
}

const Store = { state, actions }

export default Store
