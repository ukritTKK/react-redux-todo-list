const initialState = {
  type: '',
  dropdownFilter: 'All',
  IsDropdownShow: false,
  todoList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'Set_Filter':
      return {
        ...state,
        type : action.type,
        dropdownFilter: action.payload
      }

    case 'Toggle_Dropdown_Filter':
      return {
        ...state,
        type : action.type,
        IsDropdownShow: !state.IsDropdownShow
      }

    default:
      return state
  }
}
