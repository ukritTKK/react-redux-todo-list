import React, { Component } from 'react'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './style.css'
import addIcon from './img/baseline-add-24px.svg'
import TodoList from './TodoList'

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.handleSelectFilter = this.handleSelectFilter.bind(this)
    this.handleDropdown = this.handleDropdown.bind(this)
    this.toggleAddTaskModal = this.toggleAddTaskModal.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleSelectFilter = event => {
    this.props.onSelectFilter(event.target.id)
    this.handleDropdown()
  }

  handleDropdown = () => {
    this.props.toggleDropdownFilter()
  }

  toggleAddTaskModal = () => {
    this.props.toggleAddModal()
  }

  handleAddTask = () => {
    this.props.AddNewTask()
    this.toggleAddTaskModal()
  }

  handleTitleChange = event => {
    this.props.AddTask('title', event.target.value)
  }

  handleDescChange = event => {
    this.props.AddTask('desc', event.target.value)
  }

  handleDateChange = event => {
    this.props.AddTask('due', event.target.value)
  }

  render() {
    return (
      // <div>
      //   <div className='container'>
      //     <div className='header-container'>
      //       <div className='web-logo'>
      //         Logo
      //       </div>
      //     </div>
      //     <div>
      //       <Container>
      //         <Row>
      //           <Col xs='3' style={{backgroundColor: 'lightblue' }}>
      //             .col
      //           </Col>
      //           <Col style={{backgroundColor: 'lightgreen' }}>
      //             .col
      //           </Col>
      //         </Row>
      //         <Row>
      //           <Col>
      //             .col
      //           </Col>
      //         </Row>
      //       </Container>
      //     </div>
      //   </div>
      // </div>
      <Container>
        <Row>
          <Col>
            <h1 className='header-name'>Todo List</h1>
          </Col>
        </Row>
        <Row>
          <Col style={{height: 64}}>

          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 2 }} className='todo-container'>
            <div className='sub-header'>Reminders</div>
            <Row>
              <div className='addButton' onClick={this.toggleAddTaskModal}>
                <img src={addIcon} alt='' className='addIcon'/>
                <div className='addText'>Add new task</div>
              </div>
              <div className='filter'>
                <div>
                  Filter:
                </div>
                <div>
                  <Dropdown isOpen={this.props.home.IsDropdownShow} size='sm' toggle={this.handleDropdown}>
                    <DropdownToggle caret className='dropdown-filter'>
                      {this.props.home.dropdownFilter}
                    </DropdownToggle>
                    <DropdownMenu>
                      <div className='dropdown-item-each' id='All' onClick={this.handleSelectFilter}>All</div>
                      <div className='dropdown-item-each' id='Completed' onClick={this.handleSelectFilter}>Completed</div>
                      <div className='dropdown-item-each' id='Incompleted' onClick={this.handleSelectFilter}>Incompleted</div>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </Row>
            <Row>
              <div className='todoList' >
                <TodoList todos={this.props.home.todoList} filter={this.props.home.dropdownFilter} {...this.props}/>
              </div>
            </Row>
          </Col>
        </Row>
        <Modal isOpen={this.props.home.IsModalAddTaskShow} toggle={this.toggleAddTaskModal}>
          <ModalHeader toggle={this.toggleAddTaskModal}>Add task</ModalHeader>
          <ModalBody>
            <div>
              Title:
              <Input className='edit-input' placeholder='Title' onChange={this.handleTitleChange} value={this.props.home.currAddTitle} />
            </div>
            <div>
              Description:
              <Input className='edit-input' placeholder='Description' onChange={this.handleDescChange} value={this.props.home.currAddDesc} />
            </div>
            <div>
              Due date:
              <Input className='edit-input' placeholder='Due date' onChange={this.handleDateChange} value={this.props.home.currAddDue} />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleAddTask}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggleAddTaskModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    )
  }
}

export default home
