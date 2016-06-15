import React, { Component } from 'react';

export default class MessageForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			content: ''
		}
	}
	render() {
		return (
			<form>
				<input type= "text" placeholder="Type your name"
				value={this.state.name}
				onChange = { (event) => {
					console.log(event.target.value);
					this.setState( {name: event.target.value})
				}}/>				 
				<textarea placeholder="Type in your message" rows="5" 
				value={this.state.content}
				onChange = { (event) => {
					this.setState( {content: event.target.value})
				}}/>				
				<button onClick = { (event) => {
					event.preventDefault();
					console.log(this.state);
				}}>Post New Message </button>


			</form>
		);
	}
}
