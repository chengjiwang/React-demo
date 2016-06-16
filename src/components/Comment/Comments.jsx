import React, { Component } from 'react';

export default class Comments extends Component {
	render() {
        // var comment = this.props.comment;
        // console.log(comment);
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
                            <h5> time </h5>
                        </div>
                        <p>{this.props.message}</p>
                    </div>
                    <div className="stats"> 
                        <button  className="btn btn-default stat-item">
                            <i className="fa fa-thumbs-up icon" ></i>
                        </button>
                        <button className="btn btn-default stat-item">
                            <i className="fa fa-thumbs-down icon"  ></i>
                        </button>
                        <div  className="pull-right">                                
                            <button  className="btn btn-primary">edit</button>
                            <button  className="btn btn-danger">delete</button>
                        </div>
                    </div>
                </li>
            </ul>
			</section>
		);
	}
}
