import { observable, action } from 'mobx'

const state = observable({
  confirmDirty: false,
})

const actions = {
  handleConfirmBlur: action((e) => {
    state.confirmDirty = e.target.value
  }),
}

const Store = { state, actions }

export default Store
