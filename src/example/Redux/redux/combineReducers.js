const combineReducers = (reducers) => {
  const reducerKeys = Object.keys(reducers)

  // 返回合并后新的reducer函数
  const combination = (state = {}, action) => {
    // 生成新的state
    const nextState = {}

    // 遍历执行所有的reducers并生成一个新的state
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]

      // 旧key对应的state
      const previousStateForKey = state[key]

      // 执行当前循环的reducer，获取新的state
      const nextStateForKey = reducer(previousStateForKey, action)

      nextState[key] = nextStateForKey
    }
    return nextState
  }

  return combination
}

export default combineReducers