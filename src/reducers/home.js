const initialState = {
  type: '',
  dropdownFilter: 'All',
  IsDropdownShow: false,
  todoList: [
    {
      task: 'Todo 1',
      status: 'Completed'
    },
    {
      task: 'Todo 2',
      status: 'Incompleted'
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'Set_Filter':
      return Object.assign({}, state, {
        type : action.type,
        dropdownFilter: action.payload
      })

    case 'Toggle_Dropdown_Filter':
      return Object.assign({}, state, {
        type : action.type,
        IsDropdownShow: !state.IsDropdownShow
      })

    case 'Toggle_Task':
      return Object.assign({}, state, {
        type : action.type,
        todoList: action.payload
      })

    default:
      return state
  }
}
