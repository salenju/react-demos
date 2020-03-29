import { observable, action, autorun, runInAction, computed } from 'mobx'

const store = observable({
  firstName: 'Salen',
  secoedName: 'Ju',
  cart: {
    total: 1000,
    details: [
      {
        id: '1585393853079',
        name: '鼠标',
        price: '200',
        count: 1,
        subTotal: '200'
      },
      {
        id: '1585393853080',
        name: '键盘',
        price: '400',
        count: 1,
        subTotal: '400'
      },
      {
        id: '1585393853081',
        name: '钢笔',
        price: '100',
        count: 3,
        subTotal: '300'
      },
      {
        id: '1585393853082',
        name: '宣纸',
        price: '50',
        count: 2,
        subTotal: '100'
      }
    ]
  } // 购物车清单
})

const actions = {
  getName: action(() => {
    return store.firstName + store.secoedName
  }),

  setName: action((first, second) => {
    store.firstName = first
    store.secoedName = second
  }),

  asyncSetName: action((first, second) => {
    setTimeout(
      runInAction(() => {
        store.firstName = first
        store.secoedName = second
      }),
      1000
    )
  }),

  changeCount: action(() => {
    store.cart.details[0].count = store.cart.details[0].count + 2
  })
}
autorun(() => {
  console.log(`${Date.now()}----->name:`, store.firstName + store.secoedName)
})

autorun(() => {
  const { cart } = store
  let newTotal = 0
  cart.details.map(item => {
    item.subTotal = item.price * item.count
    newTotal = newTotal + item.subTotal
    return item
  })

  console.log('======>total:', newTotal)
})

const MobxStore = { store, actions }

export default MobxStore
