/**
 * 把每一个单独的reducer函数合并成一个总的reducder
 *
 */
import { combineReducers } from 'redux'

import vote from './vote'
import personal from './personal'

let reducer = combineReducers({
  vote,
  personal,
})

export default reducer
