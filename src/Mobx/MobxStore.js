import { observable, action, autorun, runInAction } from "mobx" 

const store = observable({
  firstName: "Salen",
  secoedName: "Ju"
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
  })
} 

autorun(() => {
  let a = 1
  let b = 2
  b == a
  console.log(`${Date.now()}----->name:`, store.firstName + store.secoedName) 
}) 

const MobxStore = { store, actions } 

export default MobxStore 
