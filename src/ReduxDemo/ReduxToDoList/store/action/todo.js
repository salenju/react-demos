import * as TYPES from '../action-types'

const todo = {
  // 增加任务
  add(payload) {
    return {
      type: TYPES.TODO_ADD,
      payload,
    }
  },

  /**
   * 过滤任务
   * @param {String} text  all / complete / uncomplete
   */
  filter(text){
    return{
      type: TYPES.TODO_FILTER,
      text
    }
  }
}

export default todo
