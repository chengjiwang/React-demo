import React, { Component } from 'react';
import { connect} from 'react-redux';
import Post from './Post/Post.jsx';
import MessageForm from './MessageForm/MessageForm.jsx';
import Comment from './Comment/Comments.jsx';
import {addComment , deleteComment,editComment ,likeNum} from '../actions/appAction.js' ;

 class App extends Component {
  render() {
  	console.log(this.props);
    var cardList = this.props.comment.map(function(item,index){
            return <Comment 
            name = {item.name}
            message = {item.message}
            likeNum = {item.likeNum}
            delete = {()=> {
                this.props.dispatch(deleteComment(index))
            }}
            edit = {(message)=>{
                // console.log(message,index)
                this.props.dispatch(editComment(message,index))
            }}
            like = {(num)=>{
                this.props.dispatch(likeNum(num,index))
            }}

             >
            </Comment>
        },this)
    return (
    	<div className="container"> 		
    		<Post />
    		<MessageForm submit={(item) => {
    			this.props.dispatch(addComment(item))
    		}} />
            <div >
                { cardList } 
            </div>
    		{/*<Comment data={this.props.comment} />*/}
    	</div>  
    );
  }
}

export default connect(function(state){
    return {
        comment: state.comment  //state 是store.getState() 拿到的資料
    };
})(App)