import React, { Component } from 'react';
export default class Post extends Component {
	render() {
		return (
			<section className="col-xs-12">
				<div className="post-heading">
                    <div className="pull-left">
                        <img src="http://bootdey.com/img/Content/user_2.jpg" alt="user profile image" />
                    </div>
                    <div className="pull-left">
                        <div className="title">
                            <a href="#"><b>Marvis Wang</b></a> made a post.
                        </div>
                        <h6>10 minute ago</h6>
                    </div>
                </div>
                <div className="post-description">
                    <p>「浪花兄弟」柯瑞、克雷湯普生攜手火力全開，勇士幾乎難以擊敗！勇士昨在西區準決賽第5戰，靠著柯瑞29分、11助攻，湯普生也拿33分，最後125比121力挫拓荒者，4勝1敗戰績宣告連兩年闖進西區冠軍賽。</p>  
                </div>
			</section>  
		);
	}
}
