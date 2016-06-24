import React, { Component } from 'react';

export default class Comments extends Component {
	render() {   
		return (
			<section>
                <ul className="comments-list">
                    <li>
        				<a className="pull-left" href="#">
                            <img src="http://bootdey.com/img/Content/user_1.jpg" alt="avatar" />
                        </a>
                        <div className="comment-body">
                            <div>
                                <h4> {this.props.name} </h4>
                                
                            </div>
                            <p>{this.props.message}</p>
                        </div>
                        <div className="stats"> 
                            <button  
                                className="btn btn-default stat-item"
                                onClick ={()=>{
                                    var num =this.props.likeNum + 1 ;
                                    this.props.like(num);
                                    console.log(num)
                                }}>                   
                                <i className="fa fa-thumbs-up icon" >{this.props.likeNum}</i>
                            </button>
                            <button 
                                className="btn btn-default stat-item"
                                onClick = {()=>{
                                    var num =this.props.dislikeNum + 1;
                                    this.props.dislike(num);
                                    console.log(num);
                                }}>
                                
                                <i className="fa fa-thumbs-down icon"  >{this.props.dislikeNum}</i>
                            </button>
                            <div  className="pull-right">                                
                                <button  
                                    className="btn btn-primary"
                                    onClick = {()=>{
                                        var message = prompt("edit" ,this.props.message);
                                        this.props.edit(message);
                                    }}>
                                    edit                          
                                </button>
                                <button  
                                    className="btn btn-danger"
                                    onClick = {()=>{
                                        this.props.delete();
                                    }}>
                                    delete
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
			</section>
		);
	}
}
