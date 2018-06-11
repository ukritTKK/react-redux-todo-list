
const initialState = {
  type: '',
  dropdownFilter: 'All',
  IsDropdownShow: false,
  todoList: JSON.parse(localStorage.todoList),
  IsModalAddTaskShow: false,
  IsModalEditTaskShow: false,
  IsModalRemoveTaskShow: false,
  selectedTaskId: 0,
  currAddTitle: '',
  currAddDesc: '',
  currAddDue: '',
  currEditTitle: '',
  currEditDesc: '',
  currEditDue: ''
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

    case 'Add_Task':
      return Object.assign({}, state, {
        type : action.type,
        currAddTitle: action.payload,
        currAddDesc: action.payload2,
        currAddDue: action.payload3
      })

    case 'Add_New_Task':
      return Object.assign({}, state, {
        type : action.type,
        todoList: action.payload
      })

    case 'Edit_Task':
      return Object.assign({}, state, {
        type : action.type,
        currEditTitle: action.payload,
        currEditDesc: action.payload2,
        currEditDue: action.payload3
      })

    case 'Save_Edit_Task':
      return Object.assign({}, state, {
        type : action.type,
        todoList: action.payload
      })

    case 'Remove_Task':
      return Object.assign({}, state, {
        type : action.type,
        todoList: action.payload
      })

    case 'Toggle_Add_Modal':
      return Object.assign({}, state, {
        type : action.type,
        IsModalAddTaskShow : !state.IsModalAddTaskShow,
        currAddTitle: action.payload,
        currAddDesc: action.payload2,
        currAddDue: action.payload3
      })

    case 'Toggle_Edit_Modal':
      return Object.assign({}, state, {
        type : action.type,
        IsModalEditTaskShow : !state.IsModalEditTaskShow,
        selectedTaskId : action.payload,
        currEditTitle: action.payload2,
        currEditDesc: action.payload3,
        currEditDue: action.payload4
      })

    case 'Toggle_Remove_Modal':
      return Object.assign({}, state, {
        type : action.type,
        IsModalRemoveTaskShow : !state.IsModalRemoveTaskShow,
        selectedTaskId : action.payload
      })

    default:
      return state
  }
}
