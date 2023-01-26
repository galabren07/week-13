import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';
import  Login from './login';

let e = React.createElement;

export default class Post extends React.Component {
   render() {
    let commentOne = {
      content: 'This is my post',
      username: 'Joe',
      data: '1-25-2023'
    };
    return(
        <div className="card w-75">
            <div className="card-header bg-primary text-white">
              Username and Time
            </div>
            <div className="card-body">
              <h3>Login Form</h3>
            </div>
            <div className="card-footer">
                <LikeButton />
                <ReplyButton />
                <Comment {...commentOne}/>
              
            </div>
        </div>
    );
 }
}