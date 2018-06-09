import React, { Component } from 'react'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, Input } from 'reactstrap'
import './style.css'
import clearIcon from './baseline-clear-24px.svg'
import editIcon from './baseline-edit-24px.svg'

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.handleClick = this.handleClick.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleClick = event => {
    this.props.onDropdownItemClick(event.target.id)
    this.handleToggle()
  }

  handleToggle = () => {
    this.props.toggleDropdownFilter()
  }

  handleCheckbox = event => {
    // console.log(event.target.id)
    this.props.toggleActiveTask(event.target.id)
  }

  TodoList = props => {
    const todos = props.todos
    const todoItems = todos.map((todoEach, index) => {
      let todoItem
      if (props.filter === 'All') {
        todoItem = (
          <div className='todoItem-each' key={index} >
            <div className='todo-checkbox' onChange={this.handleCheckbox}><Input id={index} type='checkbox'/></div>
            <div className='todo-task'>{todoEach.task}</div>
            <div className='todo-edit'><img src={editIcon} className='icon' alt=''/></div>
            <div className='todo-del'><img src={clearIcon} className='icon' alt=''/></div>
          </div>
        )
      }
      else if (props.filter === 'Completed' && todoEach.status === 'Completed') {
        todoItem = (
          <div className='todoItem-each' key={index} >
            <div className='todo-checkbox' onClick={this.handleCheckbox}><Input id={index} type='checkbox'/></div>
            <div className='todo-task'>{todoEach.task}</div>
            <div className='todo-edit'><img src={editIcon} className='icon' alt=''/></div>
            <div className='todo-del'><img src={clearIcon} className='icon' alt=''/></div>
          </div>
        )
      }
      else if (props.filter === 'Incompleted' && todoEach.status === 'Incompleted') {
        todoItem = (
          <div className='todoItem-each' key={index} >
            <div className='todo-checkbox' onClick={this.handleCheckbox}><Input id={index} type='checkbox'/></div>
            <div className='todo-task'>{todoEach.task}</div>
            <div className='todo-edit'><img src={editIcon} className='icon' alt=''/></div>
            <div className='todo-del'><img src={clearIcon} className='icon' alt=''/></div>
          </div>
        )
      }
      return todoItem
    })

    return (
      <div>{todoItems}</div>
    )
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
            <div className='header2'>Reminders</div>
            <Row>
              <div className='filter'>
                <div>
                  Filter:
                </div>
                <div>
                  <Dropdown isOpen={this.props.home.IsDropdownShow} size='sm' toggle={this.handleToggle}>
                    <DropdownToggle caret className='dropdown-filter'>
                      {this.props.home.dropdownFilter}
                    </DropdownToggle>
                    <DropdownMenu>
                      <div className='dropdown-item-each' id='All' onClick={this.handleClick}>All</div>
                      <div className='dropdown-item-each' id='Completed' onClick={this.handleClick}>Completed</div>
                      <div className='dropdown-item-each' id='Incompleted' onClick={this.handleClick}>Incompleted</div>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </Row>
            <Row>
              <div className='todoList' >
                <this.TodoList todos={this.props.home.todoList} filter={this.props.home.dropdownFilter}/>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default home
