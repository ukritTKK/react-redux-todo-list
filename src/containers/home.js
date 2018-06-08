import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Home from '../components/home/index'
import { onDropdownItemClick, toggleDropdownFilter } from '../actions/onDropdownItemClick'
// import toggleDropdownFilter from '../actions/toggleDropdownFilter'

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
  onDropdownItemClick,
  toggleDropdownFilter
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomeContainer)
