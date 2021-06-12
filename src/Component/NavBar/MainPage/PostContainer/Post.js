import React, { Component } from 'react';
import "./PostContainer.css";
import { Paper, Avatar } from '@material-ui/core';
import post from "../../../../images/post.jpeg";
import like from "../../../../images/like.png";
import likebutton from "../../../../images/likebutton.png";
import commentbutton from "../../../../images/comment.png";
import sharebutton from "../../../../images/share.png";


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <Paper className="post__container">
                <div className="post__header">
                    <div className="post__header_img">
                        <Avatar src={this.props.object.user_img} className="post_img"></Avatar>
                    </div>
                    <div className="post__header_text">
                        {this.props.object.user_name}
                      </div>
                </div>
                <div className="post__description"> {this.props.object.description} </div>
                <div className="post__image">
                    <img src={this.props.object.post_img} width="500px" />
                </div>
                <div className="post__likeCountContainer">
                    <div className="post__like">
                        <img className="post__img" src={like} />
                    </div>
                    <div className="post__likecount">
                    {this.props.object.like}
                    </div>
                </div>
                <div className="post__likeShare">
                    <div className="post__tab">
                        <div className="post__tabfirst">
                            <img className="post__tabimg" src={likebutton} />
                        </div>
                        <div className="post__tabtext">
                            Like
                            </div>
                    </div>

                    <div className="post__tab">
                        <div className="post__tabfirst">
                            <img className="post__tabimg" src={commentbutton} />
                        </div>
                        <div className="post__tabtext">
                            Comment
                            </div>
                    </div>

                    <div className="post__tab">
                        <div className="post__tabfirst">
                            <img className="post__tabimg" src={sharebutton} />
                        </div>
                        <div className="post__tabtext">
                            Share
                            </div>
                    </div>
                </div>
                <div className="upload__comment">
                <div className="upload__top">
                    <div>
                        <Avatar  src="https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.6435-1/cp0/p50x50/67799282_2356763091211453_5510315871081332736_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=-bWuQ1qnpowAX9EsuqA&_nc_ht=scontent.fhyd11-1.fna&tp=27&oh=9d9a57c30949b2077a686582f0c870ef&oe=60E0EDBF" ></Avatar>
                    </div>
                    <div>
                        <input className="upload__box" type="text" placeholder="write a comment"></input>
                    </div>
                    </div>
                </div>


            </Paper>

        </div>);
    }
}

export default Post;