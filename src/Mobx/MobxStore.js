import { observable, action, autorun } from 'mobx'

const store = observable({
  firstName: 'Salen',
  secoedName: 'Ju'
})

const actions = {
  getName: action(() => {
    return store.firstName + store.secoedName;
  }),

  setName: action((first, second) => {
    store.firstName = first;
    store.secoedName = second;
  }),
}

autorun(() => {
  console.log('----->name:', store.firstName + store.secoedName);
})

const MobxStore = { store, actions }

export default MobxStore


