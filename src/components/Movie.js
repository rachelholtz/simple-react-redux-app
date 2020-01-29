import React from 'react'
import {Link} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

const Movie = (props) => {

  return (
    <div className='figure_wrapper col-lg-3 col-6 mb-4'>
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/view/${props.post.code}`}>
            <img src={props.post.display_src} alt={props.post.caption} className='grid-photo w-100' />
          </Link>
          <CSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={props.post.likes} className='likes-heart'>{props.post.likes}</span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p className="font-weight-bold mt-3">{props.post.caption}</p>
          <div className='control-buttons'>
            <button className='likes' onClick={() => props.increment(props.i)}>
              <span className="heart-emoji">&hearts;</span>
              <span>{props.post.likes}</span>
            </button>
          </div>
        </figcaption>
      </figure>
      </div>
  )
}

export default Movie;

// onClick={() => this.props.boundSortPosts(this.state.timeStamp)