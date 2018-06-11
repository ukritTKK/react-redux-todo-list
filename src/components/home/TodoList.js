import React, { Component } from 'react'
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './style.css'
import clearIcon from './img/baseline-clear-24px.svg'
import editIcon from './img/baseline-edit-24px.svg'


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleTaskEdit = this.handleTaskEdit.bind(this)
    this.handleTaskRemove = this.handleTaskRemove.bind(this)
  
    this.handleEditTask = this.handleEditTask.bind(this)
    this.toggleEditTaskModal = this.toggleEditTaskModal.bind(this)
  
    this.toggleRemoveTaskModal = this.toggleRemoveTaskModal.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleCheckbox = event => {
    console.log(event.target.id)
    this.props.toggleActiveTask(event.target.id)
  }

  handleTaskEdit = event => {
    console.log(event.target.id)
    this.props.toggleEditModal(event.target.id)
  }

  handleTaskRemove = event => {
    this.props.toggleRemoveModal(event.target.id)
  }

  toggleEditTaskModal = () => {
    this.props.toggleEditModal()
  }

  toggleRemoveTaskModal = () => {
    this.props.toggleRemoveModal()
  }

  handleEditTask = () => {
    console.log('edit: ', this.props.home.selectedTaskId)
    this.props.SaveEditTask(this.props.home.selectedTaskId)
   this.toggleEditTaskModal()
  }

  handleDeleteTask = () => {
    console.log('delete: ', this.props.home.selectedTaskId)
    this.props.RemoveTask(this.props.home.selectedTaskId)
    this.toggleRemoveTaskModal()
  }

  handleTitleChange = event => {
    this.props.EditTask('title', this.props.home.selectedTaskId, event.target.value)
  }

  handleDescChange = event => {
    this.props.EditTask('desc', this.props.home.selectedTaskId, event.target.value)
  }

  handleDateChange = event => {
    this.props.EditTask('due', this.props.home.selectedTaskId, event.target.value)
  }

  render () {
    let todos = this.props.todos
    let todoItems = todos.map((todoEach, index) => {
      let todoItem
      if (this.props.filter === 'All') {
        let task
        if (todoEach.status === 'Completed') {
          task = (<div className='todo-task-done'>
            <div className='todo-task-title'>{todoEach.title}</div>
            <div className='todo-task-due'>{this.props.home.todoList[index].due}</div>
          </div>)
        }
        else if (todoEach.status === 'Incompleted') {
          task = (<div className='todo-task'>
            <div className='todo-task-title'>{todoEach.title}</div>
            <div className='todo-task-due'>{this.props.home.todoList[index].due}</div>
          </div>)
        }
        todoItem = (
          <div className='todoItem-each' key={index} >
            <div className='todo-checkbox'><Input id={index} type='checkbox' onChange={this.handleCheckbox} checked={this.props.home.todoList[index].done}/></div>
            {task}
            <div className='todo-edit' onClick={this.handleTaskEdit}><img src={editIcon} id={index} className='icon' alt=''/></div>
            <div className='todo-del' onClick={this.handleTaskRemove}><img src={clearIcon} id={index} className='icon' alt=''/></div>
          </div>
        )
      }
      else if (this.props.filter === 'Completed' && todoEach.status === 'Completed') {
        todoItem = (
          <div className='todoItem-each' key={index} >
            <div className='todo-checkbox'><Input id={index} type='checkbox' onChange={this.handleCheckbox} checked={this.props.home.todoList[index].done}/></div>
            <div className='todo-task-done'>{todoEach.title}</div>
            <div className='todo-edit' onClick={this.handleTaskEdit}><img src={editIcon} id={index} className='icon' alt=''/></div>
            <div className='todo-del' onClick={this.handleTaskRemove}><img src={clearIcon} id={index} className='icon' alt=''/></div>
          </div>
        )
      }
      else if (this.props.filter === 'Incompleted' && todoEach.status === 'Incompleted') {
        todoItem = (
          <div className='todoItem-each' key={index} >
            <div className='todo-checkbox'><Input id={index} type='checkbox' onChange={this.handleCheckbox} checked={this.props.home.todoList[index].done}/></div>
            <div className='todo-task'>{todoEach.title}</div>
            <div className='todo-edit' onClick={this.handleTaskEdit}><img src={editIcon} id={index} className='icon' alt=''/></div>
            <div className='todo-del' onClick={this.handleTaskRemove}><img src={clearIcon} id={index} className='icon' alt=''/></div>
          </div>
        )
      }
      return todoItem
    })
    return (
      <div>
        {todoItems}
        <Modal isOpen={this.props.home.IsModalRemoveTaskShow} toggle={this.toggleRemoveTaskModal}>
          <ModalHeader toggle={this.toggleRemoveTaskModal}>Remove task</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this task?
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.handleDeleteTask}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.toggleRemoveTaskModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.props.home.IsModalEditTaskShow} toggle={this.toggleEditTaskModal}>
          <ModalHeader toggle={this.toggleEditTaskModal}>Edit task</ModalHeader>
          <ModalBody>
            <div>
              Task id: {this.props.home.selectedTaskId}
            </div>
            <div>
              Title:
              <Input className='edit-input' placeholder='Title' onChange={this.handleTitleChange} value={this.props.home.currEditTitle} />
            </div>
            <div>
              Description:
              <Input className='edit-input' placeholder='Description' onChange={this.handleDescChange} value={this.props.home.currEditDesc} />
            </div>
            <div>
              Due date:
              <Input className='edit-input' placeholder='Due date' onChange={this.handleDateChange} value={this.props.home.currEditDue} />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleEditTask}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggleEditTaskModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

    )
  }
}

export default TodoList
