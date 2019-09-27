const createStore = (reducer, initState) => {
  let state = initState
  let listeners = []

  // 订阅
  const subscribe = (listener) => {
    listeners.push(listener)
    
    // 返回取消订阅的函数
    const unsubscribe = () => {
      const index = listeners.indexOf(listener)
      listeners.splice(listener, index)
    }
    return unsubscribe
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }

  const getState = () => {
    return state
  }

  // 用一个不匹配任何计划的type来获取初始值
  dispatch({ type: Symbol() })

  return {
    subscribe,
    dispatch,
    getState
  }
}

export default createStore