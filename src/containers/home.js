import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Home from '../components/home/index'
import { onSelectFilter, toggleDropdownFilter } from '../actions/DropdownActions'
import { toggleActiveTask, AddTask, EditTask, RemoveTask, toggleEditModal, toggleRemoveModal, SaveEditTask, toggleAddModal, AddNewTask } from '../actions/TaskActions'

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Home {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    home : state.home
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  onSelectFilter,
  toggleDropdownFilter,
  toggleActiveTask,
  toggleEditModal,
  AddTask,
  EditTask,
  RemoveTask,
  toggleRemoveModal,
  SaveEditTask,
  toggleAddModal,
  AddNewTask
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomeContainer)
