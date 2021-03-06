import { FETCH_POSTS, NEW_POST } from '../actions/types'
// reducer的作用： 返回新的状态

const initialState = {
  items: [], // API返回的 list数据
  item: [], // 用户自行添加的数据
}

export default function (state = initialState, action) {
  console.log('*******')
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      }
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      }
    default:
      return state
  }
}
