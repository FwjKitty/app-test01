import React from 'react';

export default class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.state = {
      commentText: '',
      author: ''
    }
  }

   handleSubmit(event) {
     event.preventDefault();
     const { onCommentSubmit = e => e } = this.props;
     const { author = '', commentText = '' } = this.state;
     onCommentSubmit({ author, commentText, date:' 刚刚', status: true});
     this.setState({
      commentText: '',
      author: ''
    });
   }

   handleCommentChange(event) {
     const { target: { value = '' } } = event;
     this.setState({ commentText: value });
  }

  /**
   * 更新作者信息
   * @param {object} event - 事件对象
   */
  handleAuthorChange(event) {
    const { target: { value = '' } } = event;
    this.setState({ author: value });
  }

   render(){
      const { commentText, author } = this.state;
      return (
          <form className="reply-form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="field">
              <input required type="text" placeholder="姓名" value={author} onChange={this.handleAuthorChange} />
            </div>
            <div className="field">
              <textarea required rows="6" placeholder="评论" value={commentText} onChange={this.handleCommentChange}></textarea>
            </div>
            <button type="submit" className="ui blue button">
              添加评论
            </button>    
          </form>
      )
    } 
}