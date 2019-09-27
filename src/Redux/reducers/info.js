let initState = {
  name: '云生流长',
  description: '前端爱好者'
}

const InfoReducer = (state, action) => {
  if (!state) {
    state = initState
  }

  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description
      }
    default:
      return state
  }
}

export default InfoReducer