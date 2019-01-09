import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Profile extends Component {

  componentWillMount() {
    this.props.getUserProfile(this.props.id)
  }


  render() {
   const {profile, loading} = this.props
    if (loading === true) return <p>Loading...</p>
    else
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
        <h2>Профиль</h2>
          </div>
          <div className="row">
            <div className="col-md-3">
        <p>Город: {profile.city}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              Знание языков:
              {!profile.languages ? 'no data' : profile.languages.map(item=><li>+{item}</li>)}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              Ссылки:
              {!profile.social ? 'no data' : profile.social.map(item=><ul><li><a href={item.link}>{item.label}</a></li></ul>)}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Profile.proptypes = {
  id : PropTypes.number.isRequired,
  profile : PropTypes.shape({
    city: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string),
    social: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    }))
  })
}

export default Profile
