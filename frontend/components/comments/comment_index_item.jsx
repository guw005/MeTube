import React from 'react';
import { withRouter } from 'react-router-dom';
import { uploadTime } from '../../util/date_util';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="comment-section">
                <div className="comment-author-pic-container">
                    <img className="comment-author-pic" src={this.props.user.image_url} />
                </div>

                <div>
                    <div>
                        <span className="comment-author-name">{this.props.user.username}</span>
                        <span className="comment-time">{uploadTime(this.props.comment.created_at)} ago</span>
                    </div>
                    <span className="comment-body">{this.props.comment.body}</span>
                </div>
            </div>
        )
    }
}

export default withRouter(CommentIndexItem);