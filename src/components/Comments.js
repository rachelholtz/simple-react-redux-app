import React from 'react';

class Comments extends React.Component{

  renderComment(comment, i){
    return(
      <div>
        <p>
          <strong>{comment.user}</strong>
        </p>
        <p>{comment.text}</p>
        <button className="remove-comment" onClick={() => this.removeComment(i)}>&times;</button>
      </div>
    )
  }

  handleSumbit(e){
    e.preventDefault();

    // using ref to update dom and render the new comment
    const postId = this.props.match.params.postId;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    // sending refs to actionCreator to then be used the the reducer
    this.props.addComment(postId, author, comment);
    // clearing out form once comment has been submitted
    this.refs.commentForm.reset();
  }

  removeComment(i){
    const postId = this.props.match.params.postId
    this.props.removeComment(postId, i)
  }

  render () {
    return (
      <div className="comments">
        {this.props.postComments.map((comment, i) => {
          return (
            <div className='comment' key={i}>
              <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button className='remove-comment' onClick={() => this.removeComment(i)}>&times;</button>
              </p>
            </div>
          )
        })}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSumbit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
}

export default Comments;