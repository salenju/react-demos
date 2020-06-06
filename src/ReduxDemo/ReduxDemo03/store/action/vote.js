import * as TYPE from '../action-types'

let vote = {
  support() {
    // => dispatch需要传入什么就此处就返回什么
    return {
      type: TYPE.VOTE_SUPPORT,
    }
  },

  against() {
    return {
      type: TYPE.VOTE_AGAINST,
    }
  },
}

export default vote
