import React from 'react'
import { connect } from 'react-redux'
import Profile from '../components/Profile'
import {getUserProfile} from '../actions/ProfileActions'

class ProfileContainer extends React.Component {
  render() {
    const { profile, loading } = this.props
    return <Profile profile={profile} getUserProfile = {getUserProfile} loading = {loading}/>
  }
}

const mapStateToProps = state => ({
  id: state.session.id,
  profile: state.profile.profile,
  loading: state.profile.isFetching,
})

const mapDispatchToProps = dispatch => ({
  getUserProfile : id => dispatch(getUserProfile(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
