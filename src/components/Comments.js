import React from 'react';
import Comment from "./Comment";
import PropTypes from 'prop-types';
import toggleOpen from "../decorators/toggleOpen";
import {Button} from "antd";

function Comments({comments = [], isOpen, toggleOpen}) {

    const getComments = () => {
        if (!isOpen) return null;
        if (!comments.length) return <p>No comments yet</p>;

        return (
            <ul>
                {comments.map(comment => <li key={comment.id}> <Comment comment={comment}/> </li> )}
            </ul>
        );
    };

    return (
        <div>
            {comments.length ?
                <Button onClick={toggleOpen}>{!isOpen ? "Open comments" : "Close comments"}</Button> : null}
            {getComments()}
        </div>
    );
}

Comments.propTypes = {
    comments: PropTypes.array,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
};

export default toggleOpen(Comments);