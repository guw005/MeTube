import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.comment;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault;

        if(this.props.formType === 'Create Comment'){
            this.props.createComment(this.state)
            .then(() => {
                this.setState({body:''});
            })
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    render() {
        return (
            <div className="create-comment-container">
                <div className="create-comment-pic-container">
                    <img className="create-comment-pic" src={this.props.users[this.props.currentUser].image_url}/>
                </div>

                <div className="comment-body-input-container">
                    <form className="comment-body-input" onSubmit={this.handleSubmit}>
                        <input 
                            className="comment-body-textarea"
                            placeholder="Add a public comment..."
                            onChange={this.update('body')}
                            value={this.state.body}
                        />
                    
                    <div className="comment-input-buttons">
                        <div className="comment-cancel-button">
                            <span>CANCEL</span>
                        </div>

                        <div className="comment-submit-button">
                            <input type="submit" value="COMMENT" />
                        </div>
                    </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default withRouter(CommentForm);