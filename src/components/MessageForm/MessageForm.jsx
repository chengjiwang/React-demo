import React, { Component } from 'react';

export default class MessageForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			message: ''
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
					// console.log(this.state);
					this.props.submit(this.state);
				}}>Post New Message </button>


			</form>
		);
	}
}
