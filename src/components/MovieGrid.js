import React from 'react';
import Movie from './Movie';

class MovieGrid extends React.Component{
  render(){
    return(
      <div className="main_movie-grid py-5">
        <div className="container">
          <div className="row">
            <h4 className="col-12 mb-4">Vote for your favorite:</h4>
            {/* looping over all the movie posts */}
            {this.props.posts
            .sort((a, b) => (a.likes > b.likes) ? -1 : 1)
            .map((post, i) =>
                <Movie {...this.props} key={i} i={i} post={post}/>
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default MovieGrid;