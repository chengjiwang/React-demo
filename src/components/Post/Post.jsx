import React, { Component } from 'react';

const Post = () => (
    <section>
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
            <p>皇家隊和老虎隊今鏖戰到13局才分出勝負，庫斯博（Cheslor Cuthbert）再見安打，2:1氣走老虎。
            王建民此役後援上場1.2局無失分，拿下本季第4勝。</p>  
        </div>
    </section>  
);

export default Post;
