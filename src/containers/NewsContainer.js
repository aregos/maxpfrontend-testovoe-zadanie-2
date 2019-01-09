import React from 'react'
import { connect } from 'react-redux'
import News from '../components/News'
import {getNews} from '../actions/NewsActions'

class NewsContainer extends React.Component {

  render() {
    const { data, loading } = this.props
    return <News data={data} loading = {loading}/>
  }
}

const mapStateToProps = state => ({
  data: state.news.data,
  loading: state.news.isFetching,
})

const mapDispatchToProps = dispatch => ({
  getNews:  (endPoint, method) =>  dispatch(getNews(endPoint, method)),
})


export default connect(mapStateToProps,mapDispatchToProps)(News)
