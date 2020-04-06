import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
  componentDidMount() {
    // 触发Action操作
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {
    const postItems = this.props.posts.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
}


// 把store 中的state放入props中
const mapStateToProps = (state) => ({
  posts: state.post.items, // 注意：此处的post是在 ./reducers/index.js 中定义的
  newPost: state.post.item, // 新添加的内容
})

/**
 * 2020-04-06
 *
 * connect(mapStateToProps, {actions})(MyComponent)
 * - mapStateToProps: reducer返回的新的 state，相当于是this.props
 * - actions: Action中需要触发的操作
 */

export default connect(mapStateToProps, { fetchPosts })(Posts)
