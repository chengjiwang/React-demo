import React, { Component } from 'react';

export default class MessageForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			message: '',
			likeNum: 0 ,
			dislikeNum: 0 
		}
	}
	
	render() {
		return (
			<form className="post-footer">
				<input 
				type= "text" 
				placeholder="Type your name"
				value={this.state.name}
				onChange = { (event) => {
					// console.log(event.target.value);
					this.setState( {name: event.target.value})
				}}/>				 
				<textarea 
				placeholder="Type in your message" 
				rows="5"  
				className="form-control"
				value={this.state.message}
				onChange = { (event) => {
					this.setState( {message: event.target.value})
				}}/>				
				<button 
				className="btn btn-info"
				onClick = { (event) => {
					event.preventDefault();		
					this.props.submit(this.state);
					console.log(this.state);
					this.setState({name: '',message: ''})
				}}>Post New Message </button>
			</form>
		);
	}
}
