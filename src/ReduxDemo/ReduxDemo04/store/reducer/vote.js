/**
 *
 * @param {Object} state 原始redux管理的状态信息
 * @param {Object} action dispatch派发时传递的行为对象
 */

const vote = (state = { n: 0, m: 0, title:'Salen' }, action) => {
  switch (action.type) {
    case 'VOTE_SUPPORT':
      state = { ...state, n: state.n + 1 }
      break
    case 'VOTE_AGAINST':
      state = { ...state, m: state.m + 1 }
      break
  }

  return state
}

export default vote
