import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';

let e = React.createElement;

export default class Comment extends React.Component {
    render() {
        let commentOne = {
            content: 'this is my post',
            username: 'Joe',
            date: '1-25-2023'
        };
        return (
          <div className="card w-75">
            <div className="card-header bg-success text-white">
                {this.props.content}
            </div>
            <div className="card-body">
                Comment content
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