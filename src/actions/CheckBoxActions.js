
export function toggleActiveTask(id){
  return (dispatch, getState) =>{
    let todoList = getState().home.todoList
    if (todoList[id].status === 'Incompleted') {
      todoList[id].status = 'Completed'
      dispatch({
        type : 'Toggle_Task',
        payload : todoList
      })
    }
    dispatch({
      type : 'Toggle_Task',
      payload : todoList
    })
  }
}