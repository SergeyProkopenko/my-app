import React, {Component} from 'react';
import Comment from "./Comment";

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {

        const {comments} = this.props;
        const {isOpen} = this.state;

        return (
            <div>
                {comments ? <button onClick={this.toggleOpen}>{!isOpen ? "Open comments" : "Close comments"}</button> : null}
                {this.getComments()}
            </div>
        );
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    getComments = () => {
        const {isOpen} = this.state;
        const {comments} = this.props;
        if(isOpen) {
            return(
                <ul>
                    {comments.map(comment => {
                        return(
                            <li key={comment.id}>
                                <Comment comment={comment} />
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return null;
        }
    };
}