
export function toggleActiveTask(id){

  return (dispatch, getState) =>{
    let todoList = getState().home.todoList
    if (todoList[id].status === 'Incompleted') {
      todoList[id].status = 'Completed'
      todoList[id].done = true
    }
    else if (todoList[id].status === 'Completed') {
      todoList[id].status = 'Incompleted'
      todoList[id].done = false
    }

    localStorage.todoList = JSON.stringify(todoList)

    dispatch({
      type : 'Toggle_Task',
      payload : todoList
    })
  }
}

export function RemoveTask(id){

  return (dispatch, getState) =>{
    let todoList = getState().home.todoList
    
    todoList.splice(id, 1)

    localStorage.todoList = JSON.stringify(todoList)

    dispatch({
      type : 'Remove_Task',
      payload : todoList
    })
  }
}

export function toggleRemoveModal(id){

  return (dispatch, getState) =>{
    let RemoveModalShow = getState().home.IsModalRemoveTaskShow
    let newId = id
    if (RemoveModalShow) {
      newId = 0
    }

    dispatch({
        type : 'Toggle_Remove_Modal',
        payload : newId
    })
  }
}

export function toggleEditModal(id){

  return (dispatch, getState) =>{

    let EditModalShow = getState().home.IsModalEditTaskShow
    let newTitle = getState().home.currEditTitle
    let newDesc = getState().home.currEditDesc
    let newDue = getState().home.currEditDue
    let newId = id
    if (EditModalShow) {
      newTitle = ''
      newDesc = ''
      newDue = ''
      newId = 0
    }
    else {
      newTitle = getState().home.todoList[id].title
      newDesc = getState().home.todoList[id].desc
      newDue = getState().home.todoList[id].due
    }
    
    dispatch({
        type : 'Toggle_Edit_Modal',
        payload : newId,
        payload2 : newTitle,
        payload3: newDesc,
        payload4: newDue
    })
  }
}

export function EditTask(type, id, val){

  return (dispatch, getState) =>{

    let newTitle = getState().home.currEditTitle
    let newDesc = getState().home.currEditDesc
    let newDue = getState().home.currEditDue
    
    if (type === 'title') {
      newTitle = val
    }
    else if (type === 'desc') {
      newDesc = val
    }
    else if (type === 'due') {
      newDue = val
    }

    dispatch({
      type : 'Edit_Task',
      payload : newTitle,
      payload2: newDesc,
      payload3: newDue
    })
  }
}

export function SaveEditTask(id){

  return (dispatch, getState) =>{
    let todoList = getState().home.todoList
    
    todoList[id].title = getState().home.currEditTitle
    todoList[id].desc = getState().home.currEditDesc
    todoList[id].due = getState().home.currEditDue

    localStorage.todoList = JSON.stringify(todoList)

    dispatch({
      type : 'Save_Edit_Task',
      payload : todoList
    })
  }
}

export function toggleAddModal(){
  return (dispatch, getState) =>{

    let AddModalShow = getState().home.IsModalAddTaskShow
    let newTitle = getState().home.currAddTitle
    let newDesc = getState().home.currAddDesc
    let newDue = getState().home.currAddDue
    if (AddModalShow) {
      newTitle = ''
      newDesc = ''
      newDue = ''
    }
    
    dispatch({
        type : 'Toggle_Add_Modal',
        payload: newTitle,
        payload2: newDesc,
        payload3: newDue
    })
  }
}

export function AddTask(type, val){

  return (dispatch, getState) =>{

    let newTitle = getState().home.currAddTitle
    let newDesc = getState().home.currAddDesc
    let newDue = getState().home.currAddDue
    
    if (type === 'title') {
      newTitle = val
    }
    else if (type === 'desc') {
      newDesc = val
    }
    else if (type === 'due') {
      newDue = val
    }

    dispatch({
      type : 'Add_Task',
      payload : newTitle,
      payload2: newDesc,
      payload3: newDue
    })
  }
}

export function AddNewTask(){

  return (dispatch, getState) =>{
    let todoList = getState().home.todoList

    let newTitle = getState().home.currAddTitle
    let newDesc = getState().home.currAddDesc
    let newDue = getState().home.currAddDue

    let newTask = {
      task_id: Math.floor(Math.random() * 1000) + 1,
      title: newTitle,
      desc: newDesc,
      due: newDue,
      status: 'Incompleted',
      done: false
    }

    todoList.push(newTask)

    localStorage.todoList = JSON.stringify(todoList)

    dispatch({
      type : 'Add_New_Task',
      payload : todoList
    })
  }
}
