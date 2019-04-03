import React from 'react';
import Comment from './Comment';

export default class CommentList extends React.Component {

  render() {
    const { data = [], onCommentDelete = e => e } = this.props;
    return (
        <div className="comment-list">
        <hr/>
          {
            data.map((comment, index) =>{
              return comment.status ?
                (<Comment key={index} onCommentDelete={onCommentDelete} author={comment.author} date={comment.date} index={index}>
                    {comment.commentText}
                </Comment>)
                : ""
            })
          }
        </div>
    );
  } 
}