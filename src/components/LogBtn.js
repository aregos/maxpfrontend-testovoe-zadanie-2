import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'

class LogBtn extends React.Component {
  render() {
    return (
      <Link to={!this.props.id ? '/login' : ''} onClick={this.props.id ? this.props.logOut : null}>
        <Button variant="raised" color="primary">
          <span>{!this.props.id ? 'Войти' : 'Выйти'}</span>
        </Button>
      </Link>
    )
  }
}

export default LogBtn