import React from 'react'
import { connect } from 'react-redux'
import LogBtn from '../components/LogBtn'
import {logOut} from '../actions/SessionActions'

class LogBtnContainer extends React.Component {

  render() {
    const { id } = this.props
    return <LogBtn id={id} logOut={logOut}/>
  }
}

const mapStateToProps = state => ({
  id: state.session.id,
})

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps)(LogBtn)
