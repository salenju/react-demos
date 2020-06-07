import * as TYPES from '../action-types'
const initVlaue = {
  data: [],
  flag: 'all',
}

const todo = (
  state = {
    ...initVlaue,
  },
  action
) => {
  state = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TYPES.TODO_ADD:
      let { payload } = action
      payload.id =
        state.data.length === 0
          ? 1
          : state.data[state.data.length - 1]['id'] + 1

      state.data.push(payload)
      break
    case TYPES.TODO_FILTER:
      state.flag = action.text
      break
  }

  return state
}

export default todo
