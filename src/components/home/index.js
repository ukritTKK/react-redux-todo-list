import React, { Component, FlatList } from 'react'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import './style.css'

class home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.handleClick = this.handleClick.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleClick(e) {
    this.props.onDropdownItemClick(e.target.id)
    this.handleToggle()
    setTimeout(() => {
      console.log(this.props.home.dropdownFilter)
    }, 250)
  }

  handleToggle() {
    this.props.toggleDropdownFilter()
  }

  renderFlatListItem() {

    return (
      <div>
        ss
      </div>
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
            <p className='header-name'>Todo List</p>
          </Col>
        </Row>
        <Row>
          <Col style={{height: 64}}>

          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 2 }} className='todo-container'>
            <div>Reminders</div>
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
                      <div id='All' onClick={this.handleClick}>All</div>
                      <div id='Completed' onClick={this.handleClick}>Completed</div>
                      <div id='Incompleted' onClick={this.handleClick}>Incompleted</div>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </Row>
            <Row>
              
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default home
