import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Home from '../components/home'

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
  
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HomeContainer)
