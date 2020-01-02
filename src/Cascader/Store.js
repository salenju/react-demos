import { observable, action } from 'mobx'

const store = observable({
  data: [
    {
      id: '1',
      value: '1'
    },
    {
      id: '2',
      value: '2'
    },
    {
      id: '3',
      value: '3'
    },
    {
      id: '4',
      value: '4'
    },
  ]
})

let _data = [
  {
    id: '1',
    value: '1'
  },
  {
    id: '2',
    value: '2'
  },
  {
    id: '3',
    value: '3'
  },
  {
    id: '4',
    value: '4'
  },
]

const actions = {
  onChange: action((id, value) => {
    let tar = _data.map(item => {
      if (item.id === id) {
        item.value = value
      }
      return item
    })
    _data = tar
    console.log('----------->_data:', _data)
  }),
}

export {
  store,
  actions
}