import React, { Component } from 'react';
import { connect} from 'react-redux';
import Post from './Post/Post.jsx';
import MessageForm from './MessageForm/MessageForm.jsx';
import Comment from './Comment/Comments.jsx';
import {addComment , deleteComment,editComment ,likeNum,dislikeNum} from '../actions/appAction.js' ;

 class App extends Component {
  render() {
  	console.log(this.props);
    var commentList = this.props.comment.map(function(item,index){
            return <Comment 
            name = {item.name}
            message = {item.message}
            likeNum = {item.likeNum}
            dislikeNum = {item.dislikeNum}
            delete = {()=> {
                this.props.dispatch(deleteComment(index))
            }}
            edit = {(message)=>{
                this.props.dispatch(editComment(message,index))
            }}
            like = {(num)=>{
                this.props.dispatch(likeNum(num,index))
            }}
            dislike = {(num)=>{
                this.props.dispatch(dislikeNum(num,index))
            }} >
            </Comment>
        },this)
    return (
        <div>    			
    		<Post/>
    		<MessageForm submit={(item) => {
    			this.props.dispatch(addComment(item))
    		  }}
            />
            <div>
                { commentList } 
            </div>      
        </div> 
    );
  }
}

export default connect(function(state){
    return {
        comment: state.comment  
    };
})(App)