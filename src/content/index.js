import React from 'react';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      data: [
        { "author": "小新", "date": "5 分钟前", "commentText": "哈哈哈艾哈", "status": false },
        { "author": "小婷",  "date": "3 分钟前", "commentText": "111", "status": true },
        { "author": "小君",  "date": "2 分钟前", "commentText": "666", "status": true }
      ],
    };
    this.handleCommentSubmit= this.handleCommentSubmit.bind(this);
    this.handleCommentDelete= this.handleCommentDelete.bind(this);
  }

  handleCommentSubmit(comment) {
    const { data  } = this.state;
    const newComments = data.concat(comment);
    this.setState({ data: newComments });
  }

  handleCommentDelete(index) {
    let { data  } = this.state;
    data[index].status = false;
    this.setState({data});
  }
 
  render() {
    const { data } = this.state;
    return (
        <div className="ui comments">
            <div className="App-header">评论</div>
            <CommentList data={data} onCommentDelete={this.handleCommentDelete}/>
            <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        </div>
    );
  }
}