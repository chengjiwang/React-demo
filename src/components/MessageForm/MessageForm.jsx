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
					// var name = this.state.name.trim();
    	// 			var message = this.state.message.trim();
    	// 			this.setState({id: id+1});
					// if (!name || !message) {
					// 	console.log('請輸入非空白');
						
				 //        return;			     
				 //    }
					this.props.submit(this.state);
					this.setState({name: '',message: ''})
				}}>Post New Message </button>
			</form>
		);
	}
}
