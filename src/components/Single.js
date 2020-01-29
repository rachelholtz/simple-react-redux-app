import React from 'react'
import {Link} from 'react-router-dom';
// import Movie from './Movie'
// import Comments from './Comments'
// import { CSSTransitionGroup } from 'react-transition-group'

const Single = (props) => {
  let i = props.posts.findIndex((post) => post.code === props.match.params.postId)
  let post = props.posts[i]
  // get comments, if none then show an empty array
  // let postComments = props.comments[props.match.params.postId] || []

  return (
    <div className='single-photo py-5'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-2">
            <h1>{post.caption}</h1>
            <button className='likes' onClick={() => props.increment(i)}>
              <span className="heart-emoji">&hearts;</span>
              <span>{post.likes}</span>
            </button>
            <div className="movie-description py-3">
              <p>{post.description}</p>
              <Link to={post.url} className="learn-more font-weight-bold text-uppercase">Learn More</Link>
            </div>
          </div>
          <div className="col-md-6 order-1">
            <img src={post.display_src} alt={post.caption} className='grid-photo w-100' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single;