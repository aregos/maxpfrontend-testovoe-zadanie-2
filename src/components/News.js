import React from 'react'
import PropTypes from 'prop-types'

class News extends React.Component {

  componentDidMount() {
    this.props.getNews('news','GET');
  }

  render(){
  const {data,loading} = this.props

  if (loading === true) return <p>loading...</p>
    else
   return (
    <div className='news-list'>
      <div className="container">
      {data.map((item) => {
      return (
          <div className="row offset-1">
            <div className="col-md-3">
              {item.title}
            </div>
            <div className="col-md-3">
              {item.text}
            </div>
          </div>
        )

    }
    )}
      </div>
    Всего новостей : {data.length}
    </div>
  )
}
}
News.proptypes = {
  data: PropTypes.object.isRequired,
}

export default News
