import React from 'react';
import PropType from 'prop-types';

export default function Comment({comment}) {
    return (
        <p>{comment.text} <b>by {comment.user}</b></p>
    );
}

Comment.propType = {
    comment: PropType.shape({
        id: PropType.string,
        text: PropType.string,
        user: PropType.string
    }).isRequired
};