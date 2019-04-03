import React from 'react';

export default class Comment extends React.Component{
  render(){
    const { onCommentDelete = e => e } = this.props;
       return (
           <div className="comment">
               <div>
                   <span className="author" style={{"float": "left"}}>{this.props.author}</span>
                   
                   <span onClick={() => onCommentDelete(this.props.index)} style={{"float": "right", "marginLeft": "50px", "color": "red", "cursor": "pointer"}}>删除</span>
                   
                   <div>
                       <span className="date" style={{"float": "right"}}>{this.props.date}</span>
                   </div>
                   <div style={{"clear": "both", "marginBottom": "20px"}}></div>
                   <div className="commentText" dangerouslySetInnerHTML={{__html: this.props.children}}/>
                   <hr/>
               </div>
           </div>
       )
    }
}
