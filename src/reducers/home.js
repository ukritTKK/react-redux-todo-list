const initialState = {
  type: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'action_type':
      return {
        ...state,
        type : action.type
      }

    default:
      return state
  }
}
